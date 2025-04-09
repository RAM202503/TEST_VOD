module.exports = cds.service.impl( async function(){
    // Refrence to your entity
    const { POService, EmployeeS } = this.entities;
    const { uuid, decodeURI, read, exists } = cds.utils ;

    this.on('increasedPrice', async (request, response ) => {
        try {
            const ID = request.params[0];
            console.log("Node Key : " + request.params[0].node_key );
            const tx = cds.tx(request);
                // SAP CDS TX Library calss object which will initiate the DB transactions
                await tx.update(POService).with({
                    gross_amount: { '+=' : 1000 }
                }).where(ID);
    
                return ID ;
        } catch (error) {
            return "Error" + error.toString();
        }
    }),
    this.on('getHighestOrder', async (request, response ) => {
        try {
            const tx = cds.tx(request);
            // Generates new UUID
            let id = uuid();
            console.log('Generated UUID' + id);
            const HighestOrder = await tx.read(POService).orderBy({
                gross_amount : 'desc'
            }).limit(1);
            return HighestOrder ;
        } catch (error) {
            return "Error" + error.toString();
        }
    }),
    this.on('utilsDecode', async (request, response ) => {
        try {
            // Generates new UUID
            let unDecoded = "%E0%A4%A";
            let uri = decodeURI(unDecoded);
            return uri ;
        } catch (error) {
            return "Error" + error.toString();
        }
    }),
    this.on('readConvervetFile', async (request, response ) => {
        try {
            let fileDetails = await read('mta.yaml');
            console.log(fileDetails);
            return fileDetails;
            
        } catch (error) {
            return "Error" + error.toString();
        }
    }),
    this.on('fileExist', async (request, response ) => {
        let v_message, lv_file = 'mta.yaml';
        try {
            if (exists(lv_file)) {
                v_message = lv_file + ' is exist';
            } else {
                v_message = lv_file + ' does not exist';
            }
            return v_message;
            
        } catch (error) {
            return "Error" + error.toString();
        }
    }),
    this.on('utilsUUID', async (request, response ) => {
        try {
            // Generates new UUID
            let id = uuid();
            console.log('Generated UUID : ' + id);
            return id ;
        } catch (error) {
            return "Error" + error.toString();
        }
    }),
    this.on('getLowestOrder', async (request, response ) => {
        try {
            // Refrence constant for your transaction
            const tx = cds.transaction(request);
            const LowestOrder = await tx.run(
//                SELECT.from(purchaseorder).orderBy({'gross_amount' : desc}).limit(1)
            );
            return LowestOrder ;
        } catch (error) {
            return "Error" + error.toString();
        }
    }),
    this.on('increasedTax', async (request, response ) => {
        try {
            const ID = request.params[0];
            const tx = cds.tx(request);
                // await tx.update(POService).with({
                //     gross_amount: { '+=' : 1000 }
                // }).where(ID);
            await tx.run(
//                UPDATE(SOA_DB_TRASACTION_PURCHASEORDER).set({tax_amount: 1000}).where({id:ID})
            );

            await tx.commit();
                return ID ;
        } catch (error) {
            return "Error" + error.toString();
        }
    }),
    // Salary Chek
    this.before('CREATE',EmployeeS, async(request, response) => {
        // Data which will be inserted
        var empStructure = request.data ;

        // Validate the salary
        if (empStructure.salaryAmount > 70000) {
            // Throw some error
            request.error(500,"This much salary is not allowed..!")
        }
    })
})

// Second way
// const srv = (new cds.service).on('READ','Book', req=> console.log(req.event, resizeBy.event))

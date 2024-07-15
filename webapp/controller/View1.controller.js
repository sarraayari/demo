sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel,MessageBox) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                
                
                //s4h
                var oModel = this.getOwnerComponent().getModel();
                var that=this;
                console.log(oModel)
                oModel.read("/ITEMSet",
                {
                   success:function(data)
                   {
                        var xModel = new JSONModel(data);
                        that.getView().setModel(xModel,"odataModel")
                        console.log(xModel)
                   },
                   error:function(oError)
                   {
                        console.log(oError)
                   }
                })

                //db
            var oModel = new JSONModel();
            var that = this;

        $.ajax({
            type: 'GET',
            url: "https://14385865trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/14385865trial/v1/openconnector",
            contentType : 'application/json',
            Authorization : `Basic sb-f1802272-ccd0-41e5-9df4-e79403f0c99a!b297017|it!b26655:351e9efe-8bf5-4bee-8172-51b67b2f99f6$_xv2TgE8YPiJePwC2nvErf9YLRziE4P7CBMYi8ooIFE=`,
            success: function(data){
                console.log(data);
                 // Set the retrieved data to the JSONModel
                 oModel.setData({ items: data });

                 // Bind the model to the table
                 that.getView().setModel(oModel, "dataModel");
            },
            error: function(oError){
            console.log(oError);
            }

            })

            },



    onPress_s4h: function () {
                
                
        // get selected data  => dynamic
        var data = JSON.stringify({
            "SNDPOR": "SAPAQE",
            "MESTYP": "MATMAS",
            "BEGIN": "1",
            "RCVPOR": "CPI",
            "MANDT": "400",
            "SEGMENT_1": "1",
            "EDI_DC40": "string",
            "SEGMENT_3": "1",
            "SEGMENT_2": "1",
            "MTART": "FERT",
            "E1MARAM": "string",
            "DIRECT": "1",
            "MATNR": "000000000000001132",
            "ERNAM": "string",
            "RCVPRN": "S4HANATOCP",
            "E1MAKTM": "string",
            "SNDPRT": "LS CPI",
            "RCVPRT": "LS CPI",
            "MEINS": "string",
            "SNDPRN": "AQE_SENDER",
            "MBRSH": "M",
            "TABNAM": "EDI_DC40",
            "IDOCTYP": "MATMAS05",
            "CONTAINER": "string"
          })    

    $.ajax({
        type: 'POST',
         url: "https://14385865trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/14385865trial/v1/s4h",
         data : data,
          contentType : 'application/json',
           Authorization : `Basic sb-f1802272-ccd0-41e5-9df4-e79403f0c99a!b297017|it!b26655:351e9efe-8bf5-4bee-8172-51b67b2f99f6$_xv2TgE8YPiJePwC2nvErf9YLRziE4P7CBMYi8ooIFE=`,
        success: function(data){
             console.log(data);
         },
         error: function(oError){
        console.log(oError);
         }

        })

                
            },    




        onClick: function () {

            var oModel = new JSONModel();
            var that = this;

        $.ajax({
            type: 'GET',
            url: "https://14385865trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/14385865trial/v1/openconnector",
            contentType : 'application/json',
            Authorization : `Basic sb-f1802272-ccd0-41e5-9df4-e79403f0c99a!b297017|it!b26655:351e9efe-8bf5-4bee-8172-51b67b2f99f6$_xv2TgE8YPiJePwC2nvErf9YLRziE4P7CBMYi8ooIFE=`,
            success: function(data){
                console.log(data);
                 // Set the retrieved data to the JSONModel
                 oModel.setData({ items: data });

                 // Bind the model to the table
                 that.getView().setModel(oModel, "dataModel");
            },
            error: function(oError){
            console.log(oError);
            }

            })
},


            onPress: function (){
               

        //test
                var data = JSON.stringify({
                    "SNDPOR": "SAPAQE",
                    "MESTYP": "MATMAS",
                    "BEGIN": "1",
                    "RCVPOR": "CPI",
                    "MANDT": "400",
                    "SEGMENT_1": "1",
                    "EDI_DC40": "string",
                    "SEGMENT_3": "1",
                    "SEGMENT_2": "1",
                    "MTART": "FERT",
                    "E1MARAM": "string",
                    "DIRECT": "1",
                    "MATNR": "000000000000001132",
                    "ERNAM": "string",
                    "RCVPRN": "S4HANATOCP",
                    "E1MAKTM": "string",
                    "SNDPRT": "LS CPI",
                    "RCVPRT": "LS CPI",
                    "MEINS": "string",
                    "SNDPRN": "AQE_SENDER",
                    "MBRSH": "M",
                    "TABNAM": "EDI_DC40",
                    "IDOCTYP": "MATMAS05",
                    "CONTAINER": "string"
                  })
                   var oTable = this.byId("tabs"); 
                   var aContexts = oTable.getBinding("rows").getContexts();
                   var aData = aContexts.map(function (oContext) {
                       return oContext.getObject();
                   });
                   //console.log(JSON.stringify(aData));
                   console.log(aData);
                   console.log(JSON.stringify(aData[5]));
         //var i;
        // for ( var i=0; i< aData.length ; i++){
                $.ajax({
                    type: 'POST',
                     url: "https://14385865trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/14385865trial/v1/post",
                     data : JSON.stringify(aData[5]),
                    contentType : 'application/json',
                       Authorization : `Basic sb-f1802272-ccd0-41e5-9df4-e79403f0c99a!b297017|it!b26655:351e9efe-8bf5-4bee-8172-51b67b2f99f6$_xv2TgE8YPiJePwC2nvErf9YLRziE4P7CBMYi8ooIFE=`,
                    success: function(data){
                         console.log(data);
                     },
                     error: function(oError){
                    console.log(oError);
                     }
                    })
               // }
                }
            });
        });
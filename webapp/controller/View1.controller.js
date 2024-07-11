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
                var data;
    

    $.ajax({
        type: 'POST',
         url: "",
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
extractTableDataToJSON: function (){
    var oTable = this.byId("table"); 
    var aContexts = oTable.getBinding("rows").getContexts();
    var aData = aContexts.map(function (oContext) {
        return oContext.getObject();
    });

    console.log(JSON.stringify(aData));
    return aData;
},
            onPress: function (){
               

        //test
                var data = JSON.stringify({
                    
                        "SNDPOR": "string",
                        "MESTYP": "string",
                        "BEGIN": "string",
                        "RCVPOR": "string",
                        "MANDT": "string",
                        "SEGMENT_1": "string",
                        "EDI_DC40": "string",
                        "SEGMENT_3": "string",
                        "SEGMENT_2": "string",
                        "MTART": "string",
                        "E1MARAM": "string",
                        "DIRECT": "string",
                        "MATNR": "string",
                        "ERNAM": "string",
                        "RCVPRN": "string",
                        "E1MAKTM": "string",
                        "SNDPRT": "string",
                        "RCVPRT": "string",
                        "MEINS": "string",
                        "SNDPRN": "string",
                        "MBRSH": "string",
                        "TABNAM": "string",
                        "IDOCTYP": "string",
                        "CONTAINER": "string"
                      
                  })
                  var oTable = this.byId("table"); 
                  var aContexts = oTable.getBinding("rows").getContexts();
                  var aData = aContexts.map(function (oContext) {
                      return oContext.getObject();
                  });
                  console.log(JSON.stringify(aData));



                  var container = JSON.stringify(aData);
        var i;
        for ( i of container){}
                    var jsonObject = i;
                    console.log(jsonObject);

                $.ajax({
                    type: 'POST',
                     url: "https://14385865trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/14385865trial/v1/post",
                     data : jsonObject,
                      contentType : 'application/json',
                       Authorization : `Basic sb-f1802272-ccd0-41e5-9df4-e79403f0c99a!b297017|it!b26655:351e9efe-8bf5-4bee-8172-51b67b2f99f6$_xv2TgE8YPiJePwC2nvErf9YLRziE4P7CBMYi8ooIFE=`,
                    success: function(data){
                         console.log(data);
                     },
                     error: function(oError){
                    console.log(oError);
                     }
 
                    })
                }
                    
                
            });
        });
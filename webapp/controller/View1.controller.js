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

            },
            onPress__: function () {
                var data = {
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
                    "id": 47665,
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
                };

                var apiKey = 'nUNcFBi5tzA3Zyx1ZowPfcGs8tcnyvQ5';
            var authorization = "Basic"+"sarra.ayari@aymax.fr"+":"+"u3bmjLMnGDW3bJe";
            

            var url = "https://14385865trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/14385865trial/v1/post";
            url += '?callback=callbackName';
            url += '&data=' + encodeURIComponent(JSON.stringify(data));
            url += '&APIKey=' + encodeURIComponent(apiKey);
            url += '&Authorization=' + encodeURIComponent(authorization);               
            
    

            $.ajax({
                url: url,
                type: 'POST',
                            dataType: "jsonp",
                            jsonpCallback: "handleResponse",
                            data : data,
                      APIKey : 'nUNcFBi5tzA3Zyx1ZowPfcGs8tcnyvQ5',
                      Authorization : "Basic "+"sarra.ayari@aymax.fr"+":"+"u3bmjLMnGDW3bJe",
                            success: function(data) {console.log(data);          },
                       
                    
                   error:function(oError)
                   {
                        console.log(oError);
                   }
                });

                
            },    

        onClick: function () {

            
        // get selected data => dynamic function
        $.ajax({
            type: 'GET',
            url: "https://14385865trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/14385865trial/v1/openconnector",
            data : 1,
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

            onPress: function (){
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
                

                $.ajax({
                    type: 'POST',
                     url: "https://14385865trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com:443/14385865trial/v1/post",
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
                    
                }
            });
        });
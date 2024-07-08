sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
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

                this.getOAuthToken().then((sToken) => {
                    this.getUsers(sToken);
                }).catch((error) => {
                    console.error("OAuth Error:", error);
                });
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
                        "id": 4000,
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
                    xhrFields: {
                        withCredentials: true
                    },
                     url: "https://14385865trial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/post",
                     data : data ,
                      contentType : 'application/json',
                      Authorization : "Basic"+"sb-f9872ca1-dea0-4c2c-8a9a-b07a310044b4!b297017|it-rt-14385865trial!b26655"+":"+"123469a4-0bf1-4529-9c08-6b7c28adb98d$Rk2yuWaqM_uaQd-28Cr34wpYW1GEQlbOe18D0DfN2Yo="                     ,
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
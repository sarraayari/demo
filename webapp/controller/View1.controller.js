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
                    "Material_Type": "amal",
                    "Industry_sector": "amal",
                    "Material": "amal",
                    "Created_by": "amal",
                    "Base_Unit": "amal"
                  })
                $.ajax({
                    type: 'POST',
                    xhrFields: {
                        withCredentials: true
                    },
                     url: "https://f7b751cbtrial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/externalCloud",
                     data : data ,
                      contentType : 'application/json',
                      Authorization : "Basic"+"pVe6lDVFxTPSk9if7u35xG5kwnwNvExB"+":"+"Do6YdDAViKpIyMpi"                     ,
                    success: function(data){
                         console.log(data);
                     },
                     error: function(oError){
                    console.log(oError);
                     }
 
                    })
                    
                },
                     

        
                getOAuthToken: function () {
                    var sTokenUrl = 'https://afv2dhxzl.trial-accounts.ondemand.com/api/oauth2/v2.0/token'; // Replace with your OAuth token URL
                    var sClientId = '787c1340-89b4-4caa-adb6-ba413393ec69'; // Replace with your client ID
                    var sClientSecret = 'ToEPZi5xejcmu5:CN0_eTsY3Xl7R9h78'; // Replace with your client secret
        
                    return new Promise((resolve, reject) => {
                        $.ajax({
                            url: sTokenUrl,
                            type: "POST",
                            data: {
                                'grant_type': 'client_credentials'
                            },
                            headers: {
                                "Authorization": "Basic " + btoa(sClientId + ":" + sClientSecret),
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            success: function (oData) {
                                resolve(oData.access_token);
                            },
                            error: function (oXHR, sStatus, sError) {
                                reject(sError);
                            }
                        });
                    });
                },
        
                getUsers: function (sToken) {
                    var sBaseUrl = 'https://afv2dhxzl.trial-accounts.ondemand.com/scim/v2';
        
                    $.ajax({
                        url: sBaseUrl + "/Users",
                        type: "GET",
                        headers: {
                            "Content-Type": "application/scim+json",
                            "Accept": "application/scim+json",
                            "Authorization": "Bearer " + sToken
                        },
                        success: function (oData) {
                            console.log(JSON.stringify(oData, null, 4));
                        }
                      
                    });
                }
            });
        });
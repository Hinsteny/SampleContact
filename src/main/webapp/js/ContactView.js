brite.registerView("ContactView", {emptyParent:true}, {
	create: function(data,config){
	   var contactList = data.contactList;
       return render("tmpl-ContactView", {contactList:contactList});
   },
   
   postDisplay: function(){
	    var view = this;
   },
   
   events: {
       "click; button.add": function(event){
         brite.display("ContactOperate",$mainview,{changeGroup : false, title : "Add Contact"});
       },
       
       "click; button.edit": function(event){
    	   var contactId = $(event.target).closest("tr").attr("data-contact-id");
    	   
    	   app.RemoteDAOHandler.getContactInfo(contactId).pipe(function(contact) {
    		   brite.display("ContactOperate",$mainview,{changeGroup : false, title : "Edit Contact",contact : contact});
    	   })
       },
         
       "click; button.delete": function(event){
    	   var contactId = $(event.target).closest("tr").attr("data-contact-id");
    	   
    	   app.RemoteDAOHandler.deleteContact(contactId).pipe(function(contact) {
    		   brite.display("MainView",$mainview);
    	   })
       },
       
       "click; button.setGroup": function(event){
    	   var contactId = $(event.target).closest("tr").attr("data-contact-id");
    	   
    	   app.RemoteDAOHandler.listAllGroups().pipe(function(groupList) {
    		   brite.display("ContactOperate", $mainview, {changeGroup : true, title : "Contact Groups", groupList : groupList, contactId : contactId});
    	   });
    	   
       }
       
   }
 
 });
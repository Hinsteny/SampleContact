brite.registerView("ContactOperate", {emptyParent:false}, {
	create: function(data,config){
		return render("tmpl-ContactOperate", {data : data});
   },
   
   postDisplay: function(){
	    var contactOperate = this;
   },
   
   events: {
       "click; .form-actions .add": function(event){
    	   var contactOperate = this;
    	   var firstName = contactOperate.$el.find("#firstName").val();
    	   var lastName = contactOperate.$el.find("#lastName").val();
    	   
    	   if(firstName.length <= 0) {
    		   contactOperate.$el.find("#firstNameHelpText").html("<p class='text-error'>unavailable value</p>");
    	   } else {
    		   contactOperate.$el.find("#firstNameHelpText").html("");
    	   }
    	   
    	   if(lastName.length <= 0) {
    		   contactOperate.$el.find("#lastNameHelpText").html("<p class='text-error'>unavailable value</p>");
    	   } else {
    		   contactOperate.$el.find("#lastNameHelpText").html("");
    	   }
    	   
    	   if(firstName.length > 0 && lastName.length > 0 ) {
    		   contactOperate.$el.find("#firstNameHelpText").html("");
    		   contactOperate.$el.find("#lastNameHelpText").html("");
    		   app.RemoteDAOHandler.createContact(firstName,lastName).pipe(function(contact) {
    			   brite.display("MainView",$mainview);
    		   });
    		   this.$el.remove();
    	   }
    	  
       },

       "click; .form-actions .update": function(event){
    	   var contactOperate = this;
    	   var firstName = contactOperate.$el.find("#firstName").val();
    	   var lastName = contactOperate.$el.find("#lastName").val();
    	   var contactId = contactOperate.$el.find("#firstName").attr("contactId");
    	   
    	   
    	   if(firstName.length <= 0) {
    		   contactOperate.$el.find("#firstNameHelpText").html("<p class='text-error'>unavailable value</p>");
    	   } else {
    		   contactOperate.$el.find("#firstNameHelpText").html("");
    	   }
    	   
    	   if(lastName.length <= 0) {
    		   contactOperate.$el.find("#lastNameHelpText").html("<p class='text-error'>unavailable value</p>");
    	   } else {
    		   contactOperate.$el.find("#lastNameHelpText").html("");
    	   }
    	   
    	   if(firstName.length > 0 && lastName.length > 0 ) {
    		   contactOperate.$el.find("#firstNameHelpText").html("");
    		   contactOperate.$el.find("#lastNameHelpText").html("");
    		   app.RemoteDAOHandler.updateContactInfo(contactId,firstName,lastName).pipe(function(contact) {
    			   brite.display("MainView",$mainview);
    		   });
    		   this.$el.remove();
    	   }
    	   
       },
       
       "click; button.setGroup": function(event){
     	  var contactId = this.$el.find("legend").attr("data-contact-id");
     	  var checkboxs = this.$el.find("input[type='checkbox']");
     	  var groupIds = "";
     	  
     	  checkboxs.each(function(index) {
     		  var checkbox = checkboxs[index];
     		  if(checkbox.checked) {
     			  var groupId = $(checkbox).attr("groupId")+"";
     			 groupIds=groupIds+"#"+groupId;
     		  }
     	  });
     	  
     	  app.RemoteDAOHandler.setContactGroup(contactId,groupIds);
     	  this.$el.remove();
     	  brite.display("MainView",$mainview);
        },
        
       "click; .form-actions .cancel": function(event){
    	   this.$el.remove();
       }
       
   }
   
 });



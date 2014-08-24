brite.registerView("GroupOperate", {emptyParent:false}, {
	create: function(data,config){
		return render("tmpl-GroupOperate", {data : data});
   },
   
   postDisplay: function(){
	    var groupOperate = this;
   },
   
   events: {
       "click; .form-actions .add": function(event){
    	   var groupCreate = this;
    	   var groupName = groupCreate.$el.find("#groupName").val()
    	   
    	   if(groupName.length > 0) {
    		   groupCreate.$el.find("#groupHelpText").html("");
    		   app.RemoteDAOHandler.createGroup(groupName).pipe(function(group) {
    			   brite.display("MainView",$mainview);
    			   console.log(group);
    		   });
    		   this.$el.remove();
    		   
    	   } else {
    		   groupCreate.$el.find("#groupHelpText").html("<p class='text-error'>unavailable value</p>");
    	   }
    	  
       },
       
       "click; .form-actions .cancel": function(event){
    	   this.$el.remove();
       },
       
       "click; .form-actions .update": function(event){
    	   var groupCreate = this;
    	   var groupName = groupCreate.$el.find("#groupName").val();
    	   var groupId = groupCreate.$el.find("#groupName").attr("groupId");
    	   
    	   if(groupName.length > 0) {
    		   groupCreate.$el.find("#groupHelpText").html("");
    		   console.log(groupId + ":" +groupName);
    		   app.RemoteDAOHandler.updateGroupInfo(groupId, groupName).pipe(function(group) {
    			   brite.display("MainView",$mainview);
    		   });
    		   this.$el.remove();
    		   
    	   } else {
    		   groupCreate.$el.find("#groupHelpText").html("<p class='text-error'>unavailable value</p>");
    	   }
       }
   }
 });



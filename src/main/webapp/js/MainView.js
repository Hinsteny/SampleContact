brite.viewDefaultConfig.loadTmpl = true;
brite.viewDefaultConfig.loadCss = true;

Handlebars.templates = Handlebars.templates || {};  
function render(templateName,data){
  var tmpl = Handlebars.templates[templateName];
  if (!tmpl){
    tmpl = Handlebars.compile($("#" + templateName).html());
    Handlebars.templates[templateName] = tmpl;
  }
  return tmpl(data);
}

brite.registerView("MainView", {emptyParent:true}, {
	create: function(data,config){
       return render("tmpl-MainView");
   },
   postDisplay: function(){
	    var mainView = this;
	    
	    app.RemoteDAOHandler.listAllGroups().done(function(groupList) {
    		brite.display("GroupView", mainView.$el.find(".MainView-group"), { groupList : groupList});
    	});
	    
	    app.RemoteDAOHandler.listContacts().done(function(contactList) {
    		brite.display("ContactView", mainView.$el.find(".MainView-contact"), { contactList : contactList});
    	});

   }
 });




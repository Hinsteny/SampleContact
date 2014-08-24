var app = app || {};
(function($) {
	
	//--------------- RemoteDAOHandler -----------------//

	function RemoteDAOHandler() {
		
	};
	
	//-------- method for group --------//	
	RemoteDAOHandler.prototype.listAllGroups = function() {
		return $.ajax({
			type : "POST",
			url : "group/listAllGroups",
			data : {},
			dataType : "json"
		}).pipe(function(val) {
			return val;
		});
	};
	
	RemoteDAOHandler.prototype.getGroupInfo = function(id) {
			return $.ajax({
				type : "POST",
				url : "group/getGroupInfo",
				data : {groupId : id},
				dataType : "json"
			}).pipe(function(val) {
				return val;
			});
	};

	RemoteDAOHandler.prototype.createGroup = function(groupName) {
		return $.ajax({
			type : "POST",
			url : "group/createGroup",
			data : {groupName: groupName},
			dataType : "json"
		}).pipe(function(val) {
			return val;
		});
	};
	
	RemoteDAOHandler.prototype.updateGroupInfo = function(groupId, groupName) {
		var data = {
				groupId : groupId,
				groupName : groupName
			};

			return $.ajax({
				type : "POST",
				url : "group/updateGroupInfo",
				data : data,
				dataType : "json"
			}).pipe(function(val) {
				return val;
			});
	};
	
	RemoteDAOHandler.prototype.deleteGroup = function(groupId) {
		return $.ajax({
			type : "POST",
			url : "group/deleteGroup",
			data : {groupId: groupId},
			dataType : "json"
		}).pipe(function(val) {
			return val;
		});
	};

	//-------- /method for group --------//
	
    //-------- method for contact --------//
	RemoteDAOHandler.prototype.getContactInfo = function(contactId) {
		var data = {
				contactId : contactId
			};

			return $.ajax({
				type : "POST",
				url : "contact/getContactInfo",
				data : data,
				dataType : "json"
			}).pipe(function(val) {
				return val;
			});
	};

	RemoteDAOHandler.prototype.listContacts = function() {
		return $.ajax({
			type : "POST",
			url : "contact/listContacts",
			data : {},
			dataType : "json"
		}).pipe(function(val) {
			return val;
		});
	};

	RemoteDAOHandler.prototype.createContact = function(firstName, lastName) {
		var data = {
				firstName : firstName,
				lastName : lastName
			};
		return $.ajax({
			type : "POST",
			url : "contact/createContact",
			data : data,
			dataType : "json"
		}).pipe(function(val) {
			return val;
		});
	};
	
	RemoteDAOHandler.prototype.updateContactInfo = function(contactId, firstName, lastName) {
		var data = {
				contactId : contactId,
				firstName : firstName,
				lastName : lastName
			};
		return $.ajax({
			type : "POST",
			url : "contact/updateContactInfo",
			data : data,
			dataType : "json"
		}).pipe(function(val) {
			return val;
		});
	};
	
	RemoteDAOHandler.prototype.deleteContact = function(contactId) {
		return $.ajax({
			type : "POST",
			url : "contact/deleteContact",
			data : {contactId: contactId},
			dataType : "json"
		}).pipe(function(val) {
			return val;
		});
	};
	
	RemoteDAOHandler.prototype.getContactGroups = function(contactId) {
			return $.ajax({
				type : "POST",
				url : "contact/listContactGroups",
				data : {contactId : contactId},
				dataType : "json"
			}).pipe(function(val) {
				return val;
			});
	};

	RemoteDAOHandler.prototype.setContactGroup = function(contactId, groupIds) {
		var data = {
				contactId : contactId,
				groupIds : groupIds
			};
		return $.ajax({
			type : "POST",
			url : "contact/setContactGroups",
			data : data,
			dataType : "json"
		}).pipe(function(val) {
			return val;
		});
	};
	//-------- /method for contact --------//

	//------------- /RemoteDAOHandler --------------//

	app.RemoteDAOHandler = new RemoteDAOHandler();
	
})(jQuery); 
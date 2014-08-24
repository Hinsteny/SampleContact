package com.samplecontact.webHandler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;

import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.google.common.base.Strings;
import com.google.inject.Singleton;
import com.samplecontact.dao.ContactDao;
import com.samplecontact.entity.Contact;
import com.samplecontact.entity.Groups;

@Singleton
public class ContactWebHandlers {

	@Inject
	private ContactDao contactDao;

	@WebPost("/contact/getContactInfo")
	public Contact getContactInfo(@WebParam("contactId") Long id) {
		Contact contact = contactDao.getContact(id);
		return contact;
	}

	@WebPost("/contact/listContacts")
	public List<HashMap> listContacts() {
		List<Contact> contacts = contactDao.listContacts();
		List<HashMap> results= new ArrayList<HashMap>();
		for(int i = 0, j = contacts.size(); i < j; i++){
			HashMap contact = new HashMap();
			contact.put("id", contacts.get(i).getId());
			contact.put("firstName", contacts.get(i).getFirstName());
			contact.put("lastName", contacts.get(i).getLastName());
			contact.put("groups", contactDao.getContactGroups(contacts.get(i).getId()));
			results.add(contact);
		}
		return results;
	}

	@WebPost("/contact/listContactGroups")
	public List<Groups> listContactGroups(@WebParam("contactId") Long contactId) {
		List<Groups> contactGroups = contactDao.getContactGroups(contactId);
		return contactGroups;
	}

	@WebPost("/contact/createContact")
	public boolean createContact(@WebParam("firstName") String firstName,@WebParam("lastName") String lastName) {
		return contactDao.saveContact(firstName, lastName);
	}

	@WebPost("/contact/updateContactInfo")
	public boolean updateContactInfo(@WebParam("contactId") Long contactId,@WebParam("firstName") String firstName,@WebParam("lastName") String lastName) {
		return contactDao.updateContact(contactId, firstName, lastName);
	}

	@WebPost("/contact/deleteContact")
	public boolean deleteContact(@WebParam("contactId") Long contactId) {
		return contactDao.deleteContact(contactId);
	}

	@WebPost("/contact/setContactGroups")
	public boolean setContactGroups(@WebParam("contactId") Long contactId, @WebParam("groupIds") String groupIdStr) {
		if (groupIdStr != null && groupIdStr.length() > 0) {
			String[] groupIdArray = groupIdStr.split("#");
			ArrayList<Long> groupIds = new ArrayList<Long>();
			for (int i = 0; i < groupIdArray.length; i++) {
				if(Strings.isNullOrEmpty(groupIdArray[i].trim())){
					continue;
				}
				Long groupId = Long.valueOf(groupIdArray[i].trim());
				groupIds.add(groupId);
			}
			contactDao.setContactGroups(contactId, groupIds);
		} else {
			contactDao.setContactGroups(contactId, null);
		}
		return true;
	}
}

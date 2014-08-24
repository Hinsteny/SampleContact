package com.samplecontact.dao;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import com.google.inject.Singleton;
import com.samplecontact.entity.Contact;
import com.samplecontact.entity.Groups;

@Singleton
public class GroupDao extends BaseHibernateDao<Groups>{

	@Inject
	private RelationDao relationDao;

	@Inject
	private ContactDao contactDao;
	
	public Groups getGroup(Long id) {
		Groups group = (Groups) get(id);
		return group;
	}
	
	public boolean saveGroup(String groupName) {
		Groups group = new Groups();
		group.setGroupName(groupName);
		save(group);
		return true;
	}

	public boolean updateGroup(Long id, String groupName) {
		Groups group = (Groups) get(id);
		group.setGroupName(groupName);
		update(group);
		return true;
	}
	
	public List<Groups> listGroups() {
		int maxId = count().intValue();
		List<Groups> groupList = (List<Groups>) daoHelper.find(0, maxId, "from " + entityClass.getSimpleName());
		return groupList;
	}
	
	public ArrayList<Long> getGroupIds() {
		ArrayList<Long> ids = new ArrayList<Long>();
		List<Groups> groupList = listGroups();
		for (int i = 0; i < groupList.size(); i++) {
			ids.add(groupList.get(i).getId());
		}
		return ids;
	}

	public boolean deleteGroup(Long groupId) {
		Groups group = getGroup(groupId);
		delete(group);
		relationDao.deleteGroup(groupId);
		return true;
	}
	
	public List<Contact> getGroupContacts(Long groupId){
		List<Long> contactIds = relationDao.listGroupContactIds(groupId);
		List<Contact> contacts = new ArrayList<Contact>();
		for(Long contactId : contactIds){
			Contact contact = contactDao.get(contactId);
			contacts.add(contact);
		}
		return contacts;
	}
}

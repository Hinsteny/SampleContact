package com.samplecontact.dao;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import com.google.inject.Singleton;
import com.samplecontact.entity.Relation;

@Singleton
public class RelationDao extends BaseHibernateDao<Relation>{

	public Relation getRelation (Long id) {
		Relation group = (Relation) get(id);
		return group;
	}
	
	public boolean saveRelation (Long contactId, Long groupId) {
		Relation relation = new Relation();
		relation.setContactId(contactId);
		relation.setGroupId(groupId);
		save(relation);
		return true;
	}

	public boolean updateRelation (Long id, Long contactId, Long groupId) {
		Relation relation = get(id);
		relation.setContactId(contactId);
		relation.setGroupId(groupId);
		update(relation);
		return true;
	}

	public boolean deleteRelation (Long relationId) {
		Relation relation = getRelation(relationId);
		delete(relation);
		return true;
	}
	
	public List<Long> listContactGroupIds(Long contactId) {
		List<Long> groupIds = new ArrayList<Long>();
		int maxId = count().intValue();
		if(maxId == 0){
			return groupIds;
		}
		List<Relation> relations = (List<Relation>) daoHelper.find(0, maxId, "from " + entityClass.getSimpleName() + " where contactId = ?" , contactId);
		for(Relation relation : relations){
			groupIds.add(relation.getGroupId());
		}
		groupIds = new ArrayList(new HashSet<Long>(groupIds));
		return groupIds;
	}
	
	public List<Long> listGroupContactIds(Long groupId) {
		List<Long> contatIds = new ArrayList<Long>();
		int maxId = count().intValue();
		if(maxId == 0){
			return contatIds;
		}
		List<Relation> relations = (List<Relation>) daoHelper.find(0, maxId, "from " + entityClass.getSimpleName() + " where groupId = ?" , groupId);
		for(Relation relation : relations){
			contatIds.add(relation.getContactId());
		}
		relations = new ArrayList(new HashSet<Long>(contatIds));
		return contatIds;
	}
	
	public boolean deleteContact(Long contactId){
		int maxId = count().intValue();
		List<Relation> relations = (List<Relation>) daoHelper.find(0, maxId, "from " + entityClass.getSimpleName() + " where contactId = ?" , contactId);
		for(Relation relation : relations){
			deleteRelation(relation.getId());
		}
		return true;
	}
	
	public boolean deleteGroup(Long groupId){
		int maxId = count().intValue();
		List<Relation> relations = (List<Relation>) daoHelper.find(0, maxId, "from " + entityClass.getSimpleName() + " where groupId = ?" , groupId);
		for(Relation relation : relations){
			deleteRelation(relation.getId());
		}
		return true;
	}
}

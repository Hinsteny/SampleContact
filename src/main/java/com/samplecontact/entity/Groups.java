package com.samplecontact.entity;

import javax.persistence.Entity;

@Entity
public class Groups extends BaseEntity{

	private String groupName;

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
}

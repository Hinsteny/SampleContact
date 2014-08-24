package com.samplecontact;

import com.britesnow.snow.util.PackageScanner;
import com.britesnow.snow.web.binding.EntityClasses;
import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.samplecontact.entity.BaseEntity;

public class AppConfig extends AbstractModule{

	@Override
	protected void configure() {
		System.out.println("success");
	}
	
	 // Used by the Snow Hibernate helpers to inject the entity class
    // Just need to provide the @EntityClasses
    @Provides
    @Singleton
    @EntityClasses
    public Class[] provideEntityClasses() {
        // The simplest implementation, would be to hardcode like
        // return new Class[]{com.example.samplebookmarks.entity.User.class,
        //                    com.example.samplebookmarks.entity.Item.class};
        
        // However, with few more line of code, we can have a maintenance free implementation 
        // by scanning the application entity.* java package.
        try {
            return new PackageScanner(BaseEntity.class.getPackage().getName()).findAnnotatedClasses(javax.persistence.Entity.class);
        } catch (Throwable e) {
            throw new RuntimeException("Cannot get all the enity class: " + e.getMessage());
        }

    }
}

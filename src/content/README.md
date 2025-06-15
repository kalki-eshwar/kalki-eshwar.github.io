# Content Configuration Documentation

This documentation explains the new configuration structure for the website where all configurable information has been moved to JSON files in the `src/content/` directory.

## Configuration Files

### 1. `personal-info.json`
Contains all personal information, social links, and SEO data.

**Fields:**
- `name`: Full name
- `title`: Professional title 
- `bio`: Short bio for hero section
- `description`: Longer description
- `location`: Current location
- `email`: Contact email
- `website`: Personal website URL
- `profileImage`: Path to profile image
- `backgroundImage`: Path to background image
- `resumePath`: Path to resume file
- `resumeFileName`: Filename for resume download
- `socialLinks`: Object with social media URLs
- `aboutSections`: Array of paragraphs for about section
- `seo`: SEO configuration object

### 2. `education-data.json`
Contains education, certifications, and skills information.

**Structure:**
- `education`: Array of education entries
- `certifications`: Array of certification objects
- `skills`: Array of skill categories
- `certificationCategories`: Array of filter categories

**Education Entry Fields:**
- `degree`, `institution`, `period`, `location`, `gpa`
- `description`, `coursework`, `achievements`, `type`

**Certification Entry Fields:**
- `title`, `issuer`, `date`, `credentialId`
- `description`, `skills`, `verified`, `category`
- `certificateUrl`: Link to certificate document

### 3. `work-experience.json`
Contains work experience and internship information.

**Structure:**
- `workExperience`: Array of work experience objects

**Work Entry Fields:**
- `title`, `company`, `period`, `type`, `location`
- `description`, `achievements`, `technologies`
- `companyWebsite`: Link to company website
- `certificateUrl`: Link to work certificate

### 4. `achievements-data.json`
Contains achievements and accomplishments.

**Structure:**
- `achievements`: Array of achievement objects

**Achievement Entry Fields:**
- `title`, `description`, `category`, `year`, `icon`

### 5. `contact-info.json`
Contains contact information and form configuration.

**Structure:**
- `contactInfo`: Contact details object
- `socialLinks`: Array of social platform objects
- `contactSubjects`: Array of form subject options
- `connectionTypes`: Array of connection type cards

## Data Access

All data is accessed through utility functions in `src/utils/data.ts`:

```typescript
import { getPersonalInfo, getEducationData, getWorkExperience, getAchievementsData, getContactInfo } from '@/utils/data';

// Usage in components
const personalInfo = getPersonalInfo();
const { education, certifications, skills } = getEducationData();
const { workExperience } = getWorkExperience();
const { achievements } = getAchievementsData();
const contactData = getContactInfo();
```

## Updated Components

### Components using personal info:
- `HeroSection.tsx`
- `AboutSection.tsx`
- `pages/index.tsx`

### Components using education data:
- `pages/education.tsx`

### Components using work data:
- `pages/work.tsx`

### Components using achievements:
- `AchievementsSection.tsx`

### Components using contact info:
- `pages/contact.tsx`

## Benefits

1. **Centralized Configuration**: All personal data in one place
2. **Easy Maintenance**: Update info without touching code
3. **Type Safety**: TypeScript interfaces for all data structures
4. **Consistent Structure**: Standardized data format across components
5. **Reusability**: Data can be used across multiple components
6. **SEO Management**: Centralized SEO configuration

## File Organization

```
src/
├── content/
│   ├── personal-info.json
│   ├── education-data.json
│   ├── work-experience.json
│   ├── achievements-data.json
│   ├── contact-info.json
│   ├── articles-data.json (existing)
│   └── projects/
│       └── projects.json (existing)
├── utils/
│   └── data.ts (data access utilities)
└── components/
    └── SocialIcons.tsx (reusable icon components)
```

## Making Changes

To update any information on the website:

1. **Personal Info**: Edit `personal-info.json`
2. **Education/Certifications**: Edit `education-data.json`
3. **Work Experience**: Edit `work-experience.json`
4. **Achievements**: Edit `achievements-data.json`
5. **Contact Info**: Edit `contact-info.json`

The changes will automatically reflect on the website after the data files are updated.

## Certificate Documents

All certificate links point to files in `/public/documents/`. To add actual certificates:

1. Place PDF files in `public/documents/`
2. Update the `certificateUrl` fields in the JSON files
3. Ensure file names match the URLs in the configuration

## Next Steps

1. Add actual certificate PDF files to `public/documents/`
2. Verify all company website URLs are correct
3. Update personal information as needed
4. Customize social links and contact information

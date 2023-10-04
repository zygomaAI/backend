import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionSectionData extends Schema.Component {
  collectionName: 'components_section_section_data';
  info: {
    displayName: 'SectionData';
  };
  attributes: {
    SectionTitle: Attribute.String & Attribute.Required;
    SectionContent: Attribute.RichText & Attribute.Required;
    SectionImage: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.section-data': SectionSectionData;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsWorkForce extends Schema.Component {
  collectionName: 'components_cards_work_forces';
  info: {
    displayName: 'WorkForce';
  };
  attributes: {
    CardTitle: Attribute.String & Attribute.Required;
    CardContent: Attribute.RichText & Attribute.Required;
    Link: Attribute.String;
  };
}

export interface DescBenefits extends Schema.Component {
  collectionName: 'components_desc_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    Content: Attribute.RichText & Attribute.Required;
  };
}

export interface ReviewsTestimonials extends Schema.Component {
  collectionName: 'components_reviews_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    ReviewContent: Attribute.RichText & Attribute.Required;
    Author: Attribute.String & Attribute.Required;
    AuthorDesignation: Attribute.String & Attribute.Required;
  };
}

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
      'cards.work-force': CardsWorkForce;
      'desc.benefits': DescBenefits;
      'reviews.testimonials': ReviewsTestimonials;
      'section.section-data': SectionSectionData;
    }
  }
}

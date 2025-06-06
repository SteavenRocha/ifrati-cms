import type { Schema, Struct } from '@strapi/strapi';

export interface AboutBlocksCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_about_blocks_cta_sections';
  info: {
    description: '';
    displayName: 'Cta Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    ctaStyle: Schema.Attribute.Component<'settings.cta-styles', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface AboutBlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_about_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    heroStyle: Schema.Attribute.Component<'settings.hero-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface AboutBlocksMissionSection extends Struct.ComponentSchema {
  collectionName: 'components_about_blocks_mission_sections';
  info: {
    displayName: 'Mission Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    sideImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface AboutBlocksTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_about_blocks_team_sections';
  info: {
    description: '';
    displayName: 'Team Section';
  };
  attributes: {
    cardSection: Schema.Attribute.Component<
      'component.team-card-section',
      false
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface AboutBlocksValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_about_blocks_values_sections';
  info: {
    description: '';
    displayName: 'Values Section';
  };
  attributes: {
    cardSection: Schema.Attribute.Component<
      'component.values-card-section',
      false
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface AboutBlocksVisionSection extends Struct.ComponentSchema {
  collectionName: 'components_about_blocks_vision_sections';
  info: {
    displayName: 'Vision Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false>;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    sideImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface BlocksAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_sections';
  info: {
    description: '';
    displayName: 'About Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    sideImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface BlocksBrandsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_brands_sections';
  info: {
    displayName: 'Brands Section';
  };
  attributes: {
    brands: Schema.Attribute.Component<'shared.complaints-book', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.header-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface BlocksContactSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_sections';
  info: {
    description: '';
    displayName: 'Contact Section';
  };
  attributes: {
    contactCard: Schema.Attribute.Component<'component.contact-card', false> &
      Schema.Attribute.Required;
    contactInformation: Schema.Attribute.Component<'shared.component', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface BlocksFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_sections';
  info: {
    description: '';
    displayName: 'Faq Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false>;
    questions: Schema.Attribute.Component<
      'shared.methodology-component',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
        },
        number
      >;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    hero: Schema.Attribute.Component<'component.hero', false> &
      Schema.Attribute.Required;
    socialProof: Schema.Attribute.Component<'component.social-proof', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksProgramSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_program_sections';
  info: {
    description: '';
    displayName: 'Program Section';
  };
  attributes: {
    howHelp: Schema.Attribute.Component<'component.how-help-section', false> &
      Schema.Attribute.Required;
    program: Schema.Attribute.Component<'component.program-section', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials_sections';
  info: {
    displayName: 'Testimonials Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    testimonialsSection: Schema.Attribute.Component<
      'component.testimony-section',
      false
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentCardButton extends Struct.ComponentSchema {
  collectionName: 'components_component_card_buttons';
  info: {
    description: '';
    displayName: 'Card Button';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentCardGoals extends Struct.ComponentSchema {
  collectionName: 'components_component_card_goals';
  info: {
    description: '';
    displayName: 'Card Goals';
  };
  attributes: {
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
  };
}

export interface ComponentCardImportant extends Struct.ComponentSchema {
  collectionName: 'components_component_card_importants';
  info: {
    displayName: 'Card Important';
  };
  attributes: {
    card: Schema.Attribute.Component<'component.important-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
  };
}

export interface ComponentCardSection extends Struct.ComponentSchema {
  collectionName: 'components_component_card_sections';
  info: {
    displayName: 'Card Section';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 3;
        },
        number
      >;
    cardButton: Schema.Attribute.Component<'shared.link', false> &
      Schema.Attribute.Required;
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
  };
}

export interface ComponentCollaboratorsSection extends Struct.ComponentSchema {
  collectionName: 'components_component_collaborators_sections';
  info: {
    description: '';
    displayName: 'Collaborators Section';
  };
  attributes: {
    card: Schema.Attribute.Component<'component.card-button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    sideImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentCompanyInformation extends Struct.ComponentSchema {
  collectionName: 'components_component_company_informations';
  info: {
    displayName: 'Company Information';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    style: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentComponent extends Struct.ComponentSchema {
  collectionName: 'components_component_components';
  info: {
    description: '';
    displayName: 'Component';
  };
  attributes: {
    textComponent: Schema.Attribute.Component<'shared.component', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentContactCard extends Struct.ComponentSchema {
  collectionName: 'components_component_contact_cards';
  info: {
    displayName: 'Contact Card';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentContactLinks extends Struct.ComponentSchema {
  collectionName: 'components_component_contact_links';
  info: {
    displayName: 'Contact Links';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentCtaComponent extends Struct.ComponentSchema {
  collectionName: 'components_component_cta_components';
  info: {
    description: '';
    displayName: 'Cta Component';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    ctaStyle: Schema.Attribute.Component<'settings.texts-styles', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentCtaGoals extends Struct.ComponentSchema {
  collectionName: 'components_component_cta_goals';
  info: {
    description: '';
    displayName: 'Cta Goals';
  };
  attributes: {
    ctaStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentFooter extends Struct.ComponentSchema {
  collectionName: 'components_component_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    contactLinks: Schema.Attribute.Component<'component.contact-links', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    legalLinks: Schema.Attribute.Component<'component.legal-links', false> &
      Schema.Attribute.Required;
    logo: Schema.Attribute.Component<'shared.logo-link', false> &
      Schema.Attribute.Required;
    quickLinks: Schema.Attribute.Component<'component.quick-links', false> &
      Schema.Attribute.Required;
  };
}

export interface ComponentFooterComponent extends Struct.ComponentSchema {
  collectionName: 'components_component_footer_components';
  info: {
    description: '';
    displayName: 'Footer Component';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    complaintsBook: Schema.Attribute.Component<
      'shared.complaints-book',
      false
    > &
      Schema.Attribute.Required;
    disclaimer: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    socialLinks: Schema.Attribute.Component<'shared.logo-link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
  };
}

export interface ComponentForm extends Struct.ComponentSchema {
  collectionName: 'components_component_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    style: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    titlesSectionForm: Schema.Attribute.Component<'shared.component', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 2;
        },
        number
      >;
  };
}

export interface ComponentHeader extends Struct.ComponentSchema {
  collectionName: 'components_component_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    headerStyle: Schema.Attribute.Component<'settings.header-styles', false>;
    links: Schema.Attribute.Component<'shared.header-link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    logo: Schema.Attribute.Component<'shared.logo-link', false> &
      Schema.Attribute.Required;
  };
}

export interface ComponentHeaderUp extends Struct.ComponentSchema {
  collectionName: 'components_component_header_ups';
  info: {
    description: '';
    displayName: 'Header Up';
  };
  attributes: {
    data: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    headerUpStyle: Schema.Attribute.Component<'settings.header-styles', false>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    social: Schema.Attribute.Component<'shared.logo-link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
  };
}

export interface ComponentHero extends Struct.ComponentSchema {
  collectionName: 'components_component_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    heroStyle: Schema.Attribute.Component<'settings.hero-styles', false>;
    sideImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<
      ['STYLE__1', 'STYLE__2', 'STYLE__3', 'STYLE__4']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'STYLE__1'>;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentHowHelpSection extends Struct.ComponentSchema {
  collectionName: 'components_component_how_help_sections';
  info: {
    description: '';
    displayName: 'How Help Section';
  };
  attributes: {
    cardSection: Schema.Attribute.Component<'component.card-section', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentImpact extends Struct.ComponentSchema {
  collectionName: 'components_component_impacts';
  info: {
    description: '';
    displayName: 'Impact';
  };
  attributes: {
    aditionalImpact: Schema.Attribute.Component<
      'shared.methodology-component',
      false
    > &
      Schema.Attribute.Required;
    amount: Schema.Attribute.Integer;
    detailsCard: Schema.Attribute.Component<'shared.statistics', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    impact: Schema.Attribute.Component<'shared.statistics', false> &
      Schema.Attribute.Required;
  };
}

export interface ComponentImpactForm extends Struct.ComponentSchema {
  collectionName: 'components_component_impact_forms';
  info: {
    description: '';
    displayName: 'Impact Form';
  };
  attributes: {
    donationDetails: Schema.Attribute.Component<'component.impact', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 6;
        },
        number
      >;
    formStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    secondTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    selectedTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentImportantCard extends Struct.ComponentSchema {
  collectionName: 'components_component_important_cards';
  info: {
    description: '';
    displayName: 'Important Card';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    listCard: Schema.Attribute.Component<'shared.component', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentImportantInformation extends Struct.ComponentSchema {
  collectionName: 'components_component_important_informations';
  info: {
    displayName: 'Important Information';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'shared.component', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    style: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentLegalLinks extends Struct.ComponentSchema {
  collectionName: 'components_component_legal_links';
  info: {
    description: '';
    displayName: 'Legal Links';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.markdown-link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentParticipantsComponent extends Struct.ComponentSchema {
  collectionName: 'components_component_participants_components';
  info: {
    displayName: 'Participants Component';
  };
  attributes: {
    textComponent: Schema.Attribute.Component<
      'shared.methodology-component',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentPill extends Struct.ComponentSchema {
  collectionName: 'components_component_pills';
  info: {
    description: '';
    displayName: 'Pill';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    pillStyle: Schema.Attribute.Component<'settings.header-styles', false>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentPillarCard extends Struct.ComponentSchema {
  collectionName: 'components_component_pillar_cards';
  info: {
    description: '';
    displayName: 'Pillar Card';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    methodology: Schema.Attribute.Component<
      'shared.methodology-component',
      false
    > &
      Schema.Attribute.Required;
    programComponent: Schema.Attribute.Component<'component.component', false> &
      Schema.Attribute.Required;
    sideImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentPillarCardSection extends Struct.ComponentSchema {
  collectionName: 'components_component_pillar_card_sections';
  info: {
    description: '';
    displayName: 'Pillar Card Section';
  };
  attributes: {
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    pillarCard: Schema.Attribute.Component<'component.pillar-card', true> &
      Schema.Attribute.Required;
  };
}

export interface ComponentProgramSection extends Struct.ComponentSchema {
  collectionName: 'components_component_program_sections';
  info: {
    description: '';
    displayName: 'Program Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    video: Schema.Attribute.Component<'shared.video', false> &
      Schema.Attribute.Required;
  };
}

export interface ComponentQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_component_quick_links';
  info: {
    displayName: 'Quick Links';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.header-link', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentResults extends Struct.ComponentSchema {
  collectionName: 'components_component_results';
  info: {
    displayName: 'Results';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.statistics', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentSocialProof extends Struct.ComponentSchema {
  collectionName: 'components_component_social_proofs';
  info: {
    displayName: 'Social Proof';
  };
  attributes: {
    statistics: Schema.Attribute.Component<'shared.statistics', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 3;
        },
        number
      >;
    statisticsStyle: Schema.Attribute.Component<
      'settings.section-styles',
      false
    >;
  };
}

export interface ComponentStepsSection extends Struct.ComponentSchema {
  collectionName: 'components_component_steps_sections';
  info: {
    description: '';
    displayName: 'Steps Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.Required;
    sideImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    steps: Schema.Attribute.Component<'shared.methodology-component', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentTeamCardSection extends Struct.ComponentSchema {
  collectionName: 'components_component_team_card_sections';
  info: {
    description: '';
    displayName: 'Team Card Section';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.team-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
  };
}

export interface ComponentTestimony extends Struct.ComponentSchema {
  collectionName: 'components_component_testimonies';
  info: {
    displayName: 'Testimony';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    statuS: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    testimony: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentTestimonySection extends Struct.ComponentSchema {
  collectionName: 'components_component_testimony_sections';
  info: {
    displayName: 'Testimony Section';
  };
  attributes: {
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    testimonies: Schema.Attribute.Component<'component.testimony', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ComponentTitles extends Struct.ComponentSchema {
  collectionName: 'components_component_titles';
  info: {
    displayName: 'Titles';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ComponentValuesCardSection extends Struct.ComponentSchema {
  collectionName: 'components_component_values_card_sections';
  info: {
    description: '';
    displayName: 'Values Card Section';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.statistics', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
        },
        number
      >;
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
  };
}

export interface DonateBlocksDonationForm extends Struct.ComponentSchema {
  collectionName: 'components_donate_blocks_donation_forms';
  info: {
    description: '';
    displayName: 'Donation Form';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    donationForm: Schema.Attribute.Component<'component.impact-form', false> &
      Schema.Attribute.Required;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    specificGoalsForm: Schema.Attribute.Component<
      'shared.specific-goals-form',
      false
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface DonateBlocksImportantSection extends Struct.ComponentSchema {
  collectionName: 'components_donate_blocks_important_sections';
  info: {
    description: '';
    displayName: 'Important Section';
  };
  attributes: {
    cardSection: Schema.Attribute.Component<'component.card-important', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false>;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ProgramBlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_program_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    heroStyle: Schema.Attribute.Component<'settings.hero-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ProgramBlocksParticipateSection
  extends Struct.ComponentSchema {
  collectionName: 'components_program_blocks_participate_sections';
  info: {
    description: '';
    displayName: 'Participate Section';
  };
  attributes: {
    collaboratorsSection: Schema.Attribute.Component<
      'component.collaborators-section',
      false
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false>;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    stepsSection: Schema.Attribute.Component<'component.steps-section', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ProgramBlocksPillarsSection extends Struct.ComponentSchema {
  collectionName: 'components_program_blocks_pillars_sections';
  info: {
    description: '';
    displayName: 'Pillars Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    pillars: Schema.Attribute.Component<
      'component.pillar-card-section',
      false
    > &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ProgramBlocksPurposeSection extends Struct.ComponentSchema {
  collectionName: 'components_program_blocks_purpose_sections';
  info: {
    displayName: 'Purpose Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    sideImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ProgramBlocksRequirementsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_program_blocks_requirements_sections';
  info: {
    description: '';
    displayName: 'Requirements Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'component.cta-component', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    requirementsComponent: Schema.Attribute.Component<
      'component.participants-component',
      false
    > &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    sideImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ProgramBlocksResultsSection extends Struct.ComponentSchema {
  collectionName: 'components_program_blocks_results_sections';
  info: {
    description: '';
    displayName: 'Results Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pill: Schema.Attribute.Component<'component.pill', false> &
      Schema.Attribute.Required;
    qualitativeResults: Schema.Attribute.Component<'component.results', false> &
      Schema.Attribute.Required;
    quantitativeResults: Schema.Attribute.Component<
      'component.results',
      false
    > &
      Schema.Attribute.Required;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SettingsCtaStyles extends Struct.ComponentSchema {
  collectionName: 'components_settings_cta_styles';
  info: {
    displayName: 'Cta Styles';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    sectionBackgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SettingsGlobal extends Struct.ComponentSchema {
  collectionName: 'components_settings_globals';
  info: {
    displayName: 'Global';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    favicon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    siteName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SettingsHeaderStyles extends Struct.ComponentSchema {
  collectionName: 'components_settings_header_styles';
  info: {
    displayName: 'Header Styles';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SettingsHeroStyles extends Struct.ComponentSchema {
  collectionName: 'components_settings_hero_styles';
  info: {
    displayName: 'Hero Styles';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    backgroundImage: Schema.Attribute.Media<'images'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SettingsInformation extends Struct.ComponentSchema {
  collectionName: 'components_settings_information';
  info: {
    displayName: 'Information';
  };
  attributes: {
    companyName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    googleMapsLink: Schema.Attribute.String & Schema.Attribute.Required;
    information: Schema.Attribute.Component<'shared.statistics', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
        },
        number
      >;
    RUC: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SettingsSectionStyles extends Struct.ComponentSchema {
  collectionName: 'components_settings_section_styles';
  info: {
    displayName: 'Section Styles';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SettingsTextsStyles extends Struct.ComponentSchema {
  collectionName: 'components_settings_texts_styles';
  info: {
    displayName: 'Texts Styles';
  };
  attributes: {
    textColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SettingsWebsiteStyles extends Struct.ComponentSchema {
  collectionName: 'components_settings_website_styles';
  info: {
    displayName: 'Website Styles';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    primaryColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    secondaryColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    textColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    titleColor: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    style: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'PRIMARY'>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
        minLength: 1;
      }>;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedComplaintsBook extends Struct.ComponentSchema {
  collectionName: 'components_shared_complaints_books';
  info: {
    description: '';
    displayName: 'Complaints Book';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_components';
  info: {
    description: '';
    displayName: 'Component';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedHeaderLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_header_links';
  info: {
    description: '';
    displayName: 'Internal Link';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<'/'>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    icon: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedMarkdownLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_markdown_links';
  info: {
    description: '';
    displayName: 'Markdown Link';
  };
  attributes: {
    markdown: Schema.Attribute.RichText;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updateDate: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface SharedMethodologyComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_methodology_components';
  info: {
    displayName: 'methodologyComponent';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedSpecificGoalsForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_specific_goals_forms';
  info: {
    description: '';
    displayName: 'Specific Goals Form';
  };
  attributes: {
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    cta: Schema.Attribute.Component<'component.cta-goals', false> &
      Schema.Attribute.Required;
    formStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    selectedTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedStatistics extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistics';
  info: {
    description: '';
    displayName: 'Statistics';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    resource: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_cards';
  info: {
    displayName: 'Team Card';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    video: Schema.Attribute.Media<'videos'>;
    videoDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    videoLink: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ShopBlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shop_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    heroStyle: Schema.Attribute.Component<'settings.hero-styles', false>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface ShopBlocksShopSection extends Struct.ComponentSchema {
  collectionName: 'components_shop_blocks_shop_sections';
  info: {
    description: '';
    displayName: 'Shop Section';
  };
  attributes: {
    cardStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    sectionStyle: Schema.Attribute.Component<'settings.section-styles', false>;
    subTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    whatsappLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-blocks.cta-section': AboutBlocksCtaSection;
      'about-blocks.hero-section': AboutBlocksHeroSection;
      'about-blocks.mission-section': AboutBlocksMissionSection;
      'about-blocks.team-section': AboutBlocksTeamSection;
      'about-blocks.values-section': AboutBlocksValuesSection;
      'about-blocks.vision-section': AboutBlocksVisionSection;
      'blocks.about-section': BlocksAboutSection;
      'blocks.brands-section': BlocksBrandsSection;
      'blocks.contact-section': BlocksContactSection;
      'blocks.faq-section': BlocksFaqSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.program-section': BlocksProgramSection;
      'blocks.testimonials-section': BlocksTestimonialsSection;
      'component.card-button': ComponentCardButton;
      'component.card-goals': ComponentCardGoals;
      'component.card-important': ComponentCardImportant;
      'component.card-section': ComponentCardSection;
      'component.collaborators-section': ComponentCollaboratorsSection;
      'component.company-information': ComponentCompanyInformation;
      'component.component': ComponentComponent;
      'component.contact-card': ComponentContactCard;
      'component.contact-links': ComponentContactLinks;
      'component.cta-component': ComponentCtaComponent;
      'component.cta-goals': ComponentCtaGoals;
      'component.footer': ComponentFooter;
      'component.footer-component': ComponentFooterComponent;
      'component.form': ComponentForm;
      'component.header': ComponentHeader;
      'component.header-up': ComponentHeaderUp;
      'component.hero': ComponentHero;
      'component.how-help-section': ComponentHowHelpSection;
      'component.impact': ComponentImpact;
      'component.impact-form': ComponentImpactForm;
      'component.important-card': ComponentImportantCard;
      'component.important-information': ComponentImportantInformation;
      'component.legal-links': ComponentLegalLinks;
      'component.participants-component': ComponentParticipantsComponent;
      'component.pill': ComponentPill;
      'component.pillar-card': ComponentPillarCard;
      'component.pillar-card-section': ComponentPillarCardSection;
      'component.program-section': ComponentProgramSection;
      'component.quick-links': ComponentQuickLinks;
      'component.results': ComponentResults;
      'component.social-proof': ComponentSocialProof;
      'component.steps-section': ComponentStepsSection;
      'component.team-card-section': ComponentTeamCardSection;
      'component.testimony': ComponentTestimony;
      'component.testimony-section': ComponentTestimonySection;
      'component.titles': ComponentTitles;
      'component.values-card-section': ComponentValuesCardSection;
      'donate-blocks.donation-form': DonateBlocksDonationForm;
      'donate-blocks.important-section': DonateBlocksImportantSection;
      'program-blocks.hero-section': ProgramBlocksHeroSection;
      'program-blocks.participate-section': ProgramBlocksParticipateSection;
      'program-blocks.pillars-section': ProgramBlocksPillarsSection;
      'program-blocks.purpose-section': ProgramBlocksPurposeSection;
      'program-blocks.requirements-section': ProgramBlocksRequirementsSection;
      'program-blocks.results-section': ProgramBlocksResultsSection;
      'settings.cta-styles': SettingsCtaStyles;
      'settings.global': SettingsGlobal;
      'settings.header-styles': SettingsHeaderStyles;
      'settings.hero-styles': SettingsHeroStyles;
      'settings.information': SettingsInformation;
      'settings.section-styles': SettingsSectionStyles;
      'settings.texts-styles': SettingsTextsStyles;
      'settings.website-styles': SettingsWebsiteStyles;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.complaints-book': SharedComplaintsBook;
      'shared.component': SharedComponent;
      'shared.header-link': SharedHeaderLink;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.markdown-link': SharedMarkdownLink;
      'shared.methodology-component': SharedMethodologyComponent;
      'shared.specific-goals-form': SharedSpecificGoalsForm;
      'shared.statistics': SharedStatistics;
      'shared.team-card': SharedTeamCard;
      'shared.video': SharedVideo;
      'shop-blocks.hero-section': ShopBlocksHeroSection;
      'shop-blocks.shop-section': ShopBlocksShopSection;
    }
  }
}

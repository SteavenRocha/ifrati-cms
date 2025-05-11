import type { Schema, Struct } from '@strapi/strapi';

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
    button: Schema.Attribute.Component<'shared.button', false>;
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

export interface ComponentProgramSection extends Struct.ComponentSchema {
  collectionName: 'components_component_program_sections';
  info: {
    description: '';
    displayName: 'Program Section';
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
    markdown: Schema.Attribute.RichText;
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
    displayName: 'Markdown Link';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    markdown: Schema.Attribute.RichText;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface SharedStatistics extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistics';
  info: {
    displayName: 'Statistics';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-blocks.hero-section': AboutBlocksHeroSection;
      'about-blocks.mission-section': AboutBlocksMissionSection;
      'about-blocks.vision-section': AboutBlocksVisionSection;
      'blocks.about-section': BlocksAboutSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.program-section': BlocksProgramSection;
      'component.card-section': ComponentCardSection;
      'component.contact-links': ComponentContactLinks;
      'component.footer': ComponentFooter;
      'component.footer-component': ComponentFooterComponent;
      'component.header': ComponentHeader;
      'component.header-up': ComponentHeaderUp;
      'component.hero': ComponentHero;
      'component.how-help-section': ComponentHowHelpSection;
      'component.legal-links': ComponentLegalLinks;
      'component.pill': ComponentPill;
      'component.program-section': ComponentProgramSection;
      'component.quick-links': ComponentQuickLinks;
      'component.social-proof': ComponentSocialProof;
      'settings.global': SettingsGlobal;
      'settings.header-styles': SettingsHeaderStyles;
      'settings.hero-styles': SettingsHeroStyles;
      'settings.section-styles': SettingsSectionStyles;
      'settings.website-styles': SettingsWebsiteStyles;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.complaints-book': SharedComplaintsBook;
      'shared.header-link': SharedHeaderLink;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.markdown-link': SharedMarkdownLink;
      'shared.statistics': SharedStatistics;
      'shared.video': SharedVideo;
    }
  }
}

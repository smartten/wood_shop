import type { Schema, Struct } from '@strapi/strapi';

export interface HomeSlide extends Struct.ComponentSchema {
  collectionName: 'components_home_slides';
  info: {
    displayName: 'Hero Slide';
    icon: 'picture';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    lineOne: Schema.Attribute.String & Schema.Attribute.Required;
    lineTwo: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'Call To Action';
    icon: 'phone';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIconText extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_texts';
  info: {
    displayName: 'Icon Text';
    icon: 'star';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['smile', 'clock', 'like', 'phone', 'mail', 'home', 'environment']
    > &
      Schema.Attribute.DefaultTo<'like'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIntro extends Struct.ComponentSchema {
  collectionName: 'components_shared_intros';
  info: {
    displayName: 'Intro Block';
    icon: 'layout';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    features: Schema.Attribute.Component<'shared.icon-text', true>;
    image: Schema.Attribute.Media<'images'>;
    stats: Schema.Attribute.Component<'shared.stat', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_headings';
  info: {
    displayName: 'Section Heading';
    icon: 'heading';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'Social';
    icon: 'earth';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['instagram', 'twitter', 'facebook', 'youtube']
    > &
      Schema.Attribute.DefaultTo<'instagram'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
    icon: 'chartBubble';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'home.slide': HomeSlide;
      'shared.cta': SharedCta;
      'shared.icon-text': SharedIconText;
      'shared.intro': SharedIntro;
      'shared.link': SharedLink;
      'shared.section-heading': SharedSectionHeading;
      'shared.social': SharedSocial;
      'shared.stat': SharedStat;
    }
  }
}

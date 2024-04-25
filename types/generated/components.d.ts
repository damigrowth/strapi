import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalLink extends Schema.Component {
  collectionName: 'components_global_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Facebook'>;
    url: Attribute.String & Attribute.DefaultTo<'https://www.facebook.com/'>;
  };
}

export interface PricingAddon extends Schema.Component {
  collectionName: 'components_pricing_addons';
  info: {
    displayName: 'Addon';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 85;
      }>;
    price: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 5;
          max: 1000;
        },
        number
      >;
  };
}

export interface PricingAttribute extends Schema.Component {
  collectionName: 'components_pricing_attributes';
  info: {
    displayName: 'Attribute';
    icon: 'check';
    description: '';
  };
  attributes: {
    isCheckField: Attribute.Boolean;
    title: Attribute.String;
    checked: Attribute.Boolean & Attribute.DefaultTo<false>;
    value: Attribute.String;
  };
}

export interface PricingBasicPackage extends Schema.Component {
  collectionName: 'components_pricing_basic_packages';
  info: {
    displayName: 'Basic Package';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'\u0391\u03C0\u03BB\u03CC'>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 85;
      }>;
    price: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 5;
          max: 1000;
        },
        number
      >;
    features: Attribute.Component<'pricing.attribute', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
  };
}

export interface PricingFaq extends Schema.Component {
  collectionName: 'components_pricing_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    question: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 50;
      }>;
    answer: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
        maxLength: 100;
      }>;
  };
}

export interface PricingPremiumPackage extends Schema.Component {
  collectionName: 'components_pricing_premium_packages';
  info: {
    displayName: 'Premium Package';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'\u03A0\u03C1\u03BF\u03C7\u03C9\u03C1\u03B7\u03BC\u03AD\u03BD\u03BF'>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 85;
      }>;
    price: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 10;
          max: 5000;
        },
        number
      >;
    features: Attribute.Component<'pricing.attribute', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
  };
}

export interface PricingStandardPackage extends Schema.Component {
  collectionName: 'components_pricing_standard_packages';
  info: {
    displayName: 'Standard Package';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03CC'>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 10;
        maxLength: 85;
      }>;
    price: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 5;
          max: 2000;
        },
        number
      >;
    features: Attribute.Component<'pricing.attribute', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
  };
}

export interface ProfileEmployer extends Schema.Component {
  collectionName: 'components_profile_employers';
  info: {
    displayName: 'Employer';
    icon: 'user';
  };
  attributes: {};
}

export interface ProfileFreelancer extends Schema.Component {
  collectionName: 'components_profile_freelancers';
  info: {
    displayName: 'Freelancer';
    icon: 'user';
    description: '';
  };
  attributes: {
    services: Attribute.Relation<
      'profile.freelancer',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface SocialsList extends Schema.Component {
  collectionName: 'components_socials_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    Facebook: Attribute.String & Attribute.DefaultTo<'https://facebook.com/'>;
    X: Attribute.String & Attribute.DefaultTo<'https://x.com'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.link': GlobalLink;
      'pricing.addon': PricingAddon;
      'pricing.attribute': PricingAttribute;
      'pricing.basic-package': PricingBasicPackage;
      'pricing.faq': PricingFaq;
      'pricing.premium-package': PricingPremiumPackage;
      'pricing.standard-package': PricingStandardPackage;
      'profile.employer': ProfileEmployer;
      'profile.freelancer': ProfileFreelancer;
      'socials.list': SocialsList;
    }
  }
}

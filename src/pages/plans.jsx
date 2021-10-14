import * as React from 'react';
import Layout from '../layouts/layout';
import PriceCard from '../components/ui-components/price-card';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import Seo from '../components/seo';
import { PricingCalculator } from '../components/pricing-calculator';

export default function Plans({ location }) {
  const pricing = [
    {
      name: 'Free',
      subheading: 'Risk-free trial of AccuTerra Maps, no credit card required.',
      features: [
        'Risk-free trial of AccuTerra Maps',
        'Manage API keys',
        'Track usage',
        'Free support',
      ],
      table: [
        { teir: 'Up to 10,000', cost: 'Free' },
        { teir: '10,000+', cost: 'Requires Standard Plan' },
      ],
      cta: 'Select Plan',
      link: 'https://account.accuterra.com/account/#/account/basics/signup',
    },
    {
      name: 'Standard',
      subheading:
        'Upgrade to a paid account to get 5x the free maps, and pay for only what you need with no minimum monthly fee.',
      features: [
        'Automatic billing',
        'Manage API keys',
        'Track usage ',
        'Free support',
        'Unlimited offline caching',
        'Higher map performance',
      ],
      table: [
        { teir: 'Up to 50,000', cost: 'Free' },
        { teir: '50,001 - 500,000', cost: '$0.40' },
        { teir: '500,001 - 2,000,000', cost: '$0.20' },
        { teir: '2,000,001 - 8,000,000', cost: '$0.10' },
        { teir: '8,000,000+', cost: '$0.05' },
      ],
      cta: 'Select Plan',
      link: 'https://account.accuterra.com/account/#/account/basics/signup',
    },
    {
      name: 'Enterprise',
      subheading:
        'Bulk volume discounts, Custom usage plans, Custom billing options.',
      features: [
        'Automatic billing',
        'Manage API keys',
        'Track usage ',
        'Free support',
        'Unlimited offline caching',
        'Higher map performance',
        ' Bulk volume discounts',
        'Custom usage plans',
        'Custom billing options',
      ],
      table: [],
      enterpriseText:
        "Does your organization have a unique business model or map implementation that requires custom usage plans? Contact us today and we'll create a plan that fits your needs.",
      cta: 'Contact Us',
      link: '/contact',
    },
  ];

  const frameVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <Layout location={location}>
      <Seo title="Plans" />
      <div className="content items-stretch  flex-grow">
        <div className="container mx-auto  ">
          <div className=" py-24">
            <p className="my-1 text-3xl  text-gray-600 font-bold">
              Plans & Pricing
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8  "
              variants={frameVariants}
              initial="hidden"
              animate="visible"
            >
              {pricing.map((card) => (
                <PriceCard card={card} key={card.name} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <PricingCalculator />

      <Footer />
    </Layout>
  );
}

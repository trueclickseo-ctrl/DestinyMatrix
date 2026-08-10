export class SchemaEngine {
  static generateWebSiteSchema(siteUrl: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Souliography',
      url: siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };
  }

  static generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  static generateSoftwareApplicationSchema(name: string, description: string, url: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: name,
      description: description,
      url: url,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    };
  }

  static generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }

  static generateHowToSchema(steps: { name: string; text: string }[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Generate and Read Your Destiny Matrix Chart',
      step: steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    };
  }
}

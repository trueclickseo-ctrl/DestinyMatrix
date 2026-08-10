export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  locale: string;
  availableLocales: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export class SEOEngine {
  static generateMeta(props: SEOProps) {
    let canonical = props.canonicalUrl;
    if (!canonical.endsWith('/')) {
      canonical += '/';
    }
    const cleanTitle = props.title.endsWith('Souliography') ? props.title : `${props.title} | Souliography`;
    return {
      title: cleanTitle,
      description: props.description,
      canonical,
      hreflangs: props.availableLocales.map((loc) => {
        let href = canonical.replace(`/${props.locale}/`, `/${loc}/`);
        if (!href.endsWith('/')) href += '/';
        return {
          lang: loc,
          href,
        };
      }),
      openGraph: {
        title: props.title,
        description: props.description,
        url: canonical,
        image: props.ogImage || '/og-souliography.png',
        type: 'website',
      },
    };
  }
}

import React from 'react';
import { Footer } from '../components/Footer';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Footer />
  </Layout>
);

export default NotFoundPage;

import React from 'react';
import Header from '../components/Header';
import HeaderContent from '../containers/contact/HeaderContent';
import Separator from '../components/Separator'
import Form from '../containers/contact/Form';

export default function Contact() {
  return (
    <div>
      <Header>
        <HeaderContent />
      </Header>
      <Separator />
      <Form />
    </div>
  )
}

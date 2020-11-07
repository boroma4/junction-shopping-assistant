import React from 'react'
import ProfileContent from './ProfileContent'
import Graphs from '../Graphs/PieChart'
import HeaderProfilePage from './HeaderProfilePage'
import Footer from '../Footer/Footer'
import './Profile.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AssistantSettings } from '../AssistantSettings/AssistantSettings'

export default function Profile({ productList, setProductList }) {
  return (
    <div>
      <HeaderProfilePage
        productList={productList}
        setProductList={setProductList}
      />

      <Tabs>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Budget</Tab>
          <Tab>Assistant Settings</Tab>
        </TabList>
        <TabPanel>
          <ProfileContent />
        </TabPanel>
        <TabPanel>
          <Graphs />
        </TabPanel>
        <TabPanel>
          <AssistantSettings />
        </TabPanel>
      </Tabs>
      <Footer />
    </div>
  )
}

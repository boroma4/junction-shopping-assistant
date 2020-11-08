import React from 'react'
import ProfileContent from './ProfileContent'
import Graphs from '../Graphs/PieChart'
import HeaderProfilePage from './HeaderProfilePage'
import Footer from '../Footer/Footer'
import './Profile.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AssistantSettings } from '../AssistantSettings/AssistantSettings'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

export default function Profile({ productList, setProductList, purchaseHistory, userSettings, setUserSettings, tab }) {
  return (
    <div>
      <HeaderProfilePage
        productList={productList}
        setProductList={setProductList}
      />

      <Tabs defaultIndex={tab ? tab : 0}>
        <TabList>
          <Tab><AccountCircleIcon/> Profile</Tab>
          <Tab><AccountBalanceIcon/>Budget</Tab>
          <Tab><SettingsIcon/>Assistant Settings</Tab>
        </TabList>
        <TabPanel>
          <ProfileContent />
        </TabPanel>
        <TabPanel>
          <Graphs purchaseHistory={purchaseHistory} />
        </TabPanel>
        <TabPanel>
          <AssistantSettings
              userSettings ={userSettings}
              setUserSettings={setUserSettings} />
        </TabPanel>
      </Tabs>
      <Footer />
    </div>
  )
}

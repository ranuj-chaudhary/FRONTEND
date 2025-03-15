import CustomTabs from './CustomTabs';

function CustomData() {
  return (
    <div>
      <p>This is custom data</p>
    </div>
  );
}

const tabs = [
  {
    label: 'tab1',
    content: (
      <div>
        <p>This is content tab1</p>
      </div>
    ),
  },
  {
    label: 'tab2',
    content: (
      <div>
        <p>This is content tab2</p>
      </div>
    ),
  },
  {
    label: 'tab3',
    content: <CustomData />,
  },
];

const TabTest = () => {
  function handleCurrentTab(currentTab) {
    console.log('Current Tab recieved in parent with tab index : ', currentTab);
  }
  return (
    <div className="custom-tab w-80 m-auto my-10">
      <h1>Test Custom Tabs</h1>
      <CustomTabs tabContents={tabs} onChange={handleCurrentTab} />
    </div>
  );
};

export default TabTest;

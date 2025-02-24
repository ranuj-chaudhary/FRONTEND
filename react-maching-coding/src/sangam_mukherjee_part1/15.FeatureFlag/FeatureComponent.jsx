import React, { useEffect, useState } from 'react';
import QrGenerator from '../7.QrGenerator/QrGenerator';
import CustomTabs from '../10.CustomTabs/CustomTabs';
import ScrollIndicator from '../9.ScrollIndicator/components/ScrollIndiator';
import Modal from '../11.ModalPopup/Modal';
import { subscribedFeatures } from './FeatureApi';
import { allowedFeatures } from './FeatureApi';

const style = {
  loading: 'h-full w-full flex justify-center items-center',
  error: 'h-full w-full flex justify-center items-center',
};
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
    content: (
      <div>
        <p>This is content tab3</p>
      </div>
    ),
  },
];
const FeatureComponent = () => {
  const [features, setFeatures] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async function () {
      setLoading(true);
      setError('');
      try {
        const res = await subscribedFeatures();
        if (!res) throw new Error('Problem featching features');
        setFeatures(res);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  const featuresList = [
    {
      key: 'qrGenerator',
      component: (
        <QrGenerator value={'this is QRCode'} loading={loading} error={''} />
      ),
    },
    {
      key: 'customTabs',
      component: <CustomTabs tabContents={tabs} />,
    },
    {
      key: 'scrollIndicator',
      component: <ScrollIndicator />,
    },
    {
      key: 'modalPopup',
      component: (
        <Modal>
          <p className="text-center text-4xl">header</p>
        </Modal>
      ),
    },
  ];

  if (loading)
    return (
      <div className={style.loading}>
        <p>Loading Features...</p>
      </div>
    );

  if (error)
    return (
      <div className={style.error}>
        <p>{error}</p>
      </div>
    );

  return (
    <div className="bg-yellow-300 flex flex-col gap-10">
      {featuresList &&
        featuresList.length > 0 &&
        featuresList.map((feature, idx) =>
          features[feature.key] ? (
            <div className="border-2 border-black p-4">
              <h1 className="text-2xl">{feature.key}</h1>
              {feature.component}
            </div>
          ) : null
        )}
    </div>
  );
};

export default FeatureComponent;

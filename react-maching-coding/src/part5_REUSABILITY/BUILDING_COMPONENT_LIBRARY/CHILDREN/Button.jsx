import React from 'react';

export default function Button(props) {
  return <button>{props.children}</button>;
}

/* 
Examples;
<Button>Click Me</Button>
<Button disabled>Click Me</Button>
<Button primary>Click Me</Button>
<Button secondary>Click Me</Button>
<Button success>Click Me</Button>
<Button danger>Click Me</Button>
<Button warning>Click Me</Button>
<Button info>Click Me</Button>
<Button light>Click Me</Button>
<Button dark>Click Me</Button>
<Button link>Click Me</Button>
<Button outline>Click Me</Button>
<Button block>Click Me</Button>
<Button small>Click Me</Button>
<Button large>Click Me</Button>
<Button xs>Click Me</Button>
<Button sm>Click Me</Button>
<Button md>Click Me</Button>
<Button lg>Click Me</Button>
<Button xl>Click Me</Button>
<Button xxl>Click Me</Button>
<Button rounded>Click Me</Button>
<Button circle>Click Me</Button>
<Button square>Click Me</Button>
<Button pill>Click Me</Button>
<Button square>Click Me</Button>
<Button ghost>Click Me</Button>
<Button text>Click Me</Button>
<Button icon>Click Me</Button>
<Button icon-left>Click Me</Button>

Examples with icons;
<Button icon-left>
    <i className="fas fa-home"></i>
    Home
</Button>
<Button icon-right>
    <i className="fas fa-home"></i>
    Home
</Button>

Examples with loading state;
<Button loading={true}>Click Me</Button>

Examples with react-icons;
  <Button>
        <FaMoneyBill />
        Buy now!
  </Button>
*/

# styled-morphic

Utility library for building expressive <a href="https://www.styled-components.com/" target="_blank">styled-components</a> 💅 more easily and neatly.

- <a href="#installation">Installation</a>
- <a href="#getting_started">Getting Started</a>
- <a href="#api">API</a>

<h2 id="installation">Installation</h2>

```
npm install --save styled-components
npm install --save styled-morph

or

yarn add styled-components
yarn add styled-morphic
```

<h2 id="api">API</h2>

- <a href="#styledIf">styledIf</a>
- <a href="#styledIfBulk">styledIfBulk</a>
- <a href="#styledSwitch">styledSwitch</a>
- <a href="#styledSwitchBulk">styledSwitchBulk</a>

<h3 id="styledIf">styledIf</h3>

- Definition

styles of stylesIfPresent is applied if valIsPresent is truthy.
styles of stylesIfNotPresent is applied if valIsPresent is falthy.

```
styledIf(
  valIsPresent: any,
  stylesIfPresent: string,
  stylesIfNotPresent?: string
)
```

- Example

```
import styled, { css } from "styled-components";
import { styledIf } from "styled-morphic";

const styles = (props: any) => css`
  ${styledIf(props.color, `color: ${props.color};`, "color: #00F;")};

  ${styledIf(
    props.backgroundColor,
    `background-color: ${props.backgroundColor};`
  )};
`;

export const SampleStyledIf = styled.div`
  ${styles};
`;

<SampleStyledIf color={"#F00"}>StyledIf</SampleStyledIf>
```

<h3 id="styledIfBulk">styledIfBulk</h3>

Add styles logics all at once.
styles of true is applied when the check value is present.
styles of false is applied when the check value is not present.

- Definition

```
styledIfBulk(bulkStyles: [
  {
    check: string;
    true: string;
    false?: string;
  },
  {
    check: string;
    true: string;
    false?: string;
  }
  ...
  ]
): string;
```

- Example

```
import styled, { css } from "styled-components";
import { styledIfBulk } from "styled-morphic";

const sharedStyles = (props: any) => {
  return [
    {
      check: "display",
      false: `display: block;`,
      true: `display: ${props.display};`
    },
    {
      check: "color",
      false: `color: #000;`,
      true: `color: ${props.color};`
    },
    {
      check: "backgroundColor",
      false: `background-color: #FFF;`,
      true: `background-color: ${props.backgroundColor};`
    }
  ];
};

const styles = (props: any) => css`
  ${styledIfBulk(sharedStyles(props))};
`;

export const SampleStyledIfBulk = styled.div`
  ${styles};
`;

<SampleStyledIfBulk backgroundColor={"#F00"} color={"#FFF"}>
      StyledIfBulk
</SampleStyledIfBulk>
```

<h3 id="styledSwitch">styledSwitch</h3>

Check the "switchKey" and apply corresponding styles in the "switchConditions".
the "defaultStyles" is applied when no key was matched.

- Definition

```
styledSwitch(
  switchKey: string,
  switchConditions: { [key: string]: string },
  defaultStyles: string,
): string;
```

- Example

```
import styled, { css } from "styled-components";
import { styledSwitch } from "styled-morphic";

const primaryButtonStyles = "color: #FFF; background-color: #00F;";
const dangerButtonStyles = "color: #FFF; background-color: #F00;";
const disabledButtonStyles = "color: #FFF; background-color: #CCC;";
const defaultStyles = "color: #FFF; background-color: #AAA;";

const styles = (props: any) => css`
  ${styledSwitch(
    props.type,
    {
      danger: dangerButtonStyles,
      disabled: disabledButtonStyles,
      primary: primaryButtonStyles
    },
    defaultStyles
  )};
`;

export const SampleStyledSwitch = styled.button`
  ${styles};
`;

<SampleStyledSwitch type={"danger"}>Button</SampleStyledSwitch>
```

<h3 id="styledSwitchBulk">styledSwitchBulk</h3>

Pass props and apply style logics all at once with bulkSwitch.

- Definition

```
styledSwitchBulk(
  props: any,
  bulkSwitch: [
    {
      check: string;
      switch: { [key: string]: string } | any;
      default: string;
    },
        {
      check: string;
      switch: { [key: string]: string } | any;
      default: string;
    }
    ...
    ],
): string;
```

- Example

```
import styled, { css } from "styled-components";
import { styledSwitchBulk } from "styled-morphic";

const switches = [
  {
    check: "status",
    default: "",
    switch: {
      loaded: "display: block;",
      loading: "display: none;",
      suspended: "display: block; opacity: 0.7;"
    }
  },
  {
    check: "type",
    default: "",
    switch: {
      danger: "background-color: #F00;",
      disabled: "background-color: #ccc;",
      primary: "background-color: #00F;"
    }
  }
];

const styles = (props: any) => css`
  ${styledSwitchBulk(props, switches)};
`;

export const SampleStyledSwitchBulk = styled.button`
  ${styles};
`;

<SampleStyledSwitchBulk type={"primary"} status={"suspended"}>
  Button
</SampleStyledSwitchBulk>
```

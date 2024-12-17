import * as React from 'react';

type EventHandler = () => void;
type OpenEventHandler = (window: Window) => void;

/**
 * Base features common to all window features.
 *
 * @remarks These will be concatenated into a string for window.open.
 */
export interface IWindowFeatures {
  height: number;
  width: number;
  
  [i: string]: boolean | number | string;
}

/**
 * Props for opening a new window.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/open
 */
export interface INewWindowProps {
  /**
   * The URL to open, if specified any children will be overriden.
   */
  url?: string;

  /**
   * The name of the window.
   */
  name?: string;

  /**
   * The title of the new window document.
   */
  title?: string;

  /**
   * The set of window features.
   */
  features?: IWindowFeatures;

  /**
   * A function to be triggered before the new window unload.
   */
  onBlock?: EventHandler | null;

  /**
   * A function to be triggered when the new window could not be opened.
   */
  onUnload?: EventHandler | null;

  /**
   * A function to be triggered when the new window opened.
   */
  onOpen?: OpenEventHandler | null;

  /**
   * Indicate how to center the new window.
   */
  center?: 'parent' | 'screen';

  /**
   * If specified, copy styles from parent window's document.
   */
  copyStyles?: boolean;
}

interface NewWindow extends React.Component<React.PropsWithChildren<INewWindowProps>> {}

export default NewWindow;

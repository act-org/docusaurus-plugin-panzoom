import type { PanzoomOptions } from '@panzoom/panzoom';

export type PanZoomPluginOptions = PanzoomOptions & {

  /**
   * A list of selectors to look for elements to enable pan and zoom
   * 
   * The default value is ['div.mermaid[data-processed="true"]', '.drawio']
   */
  selectors?: string[];

  /**
   * Whether to wrap the panzoom items in a div with overflow:hidden.  This constrains
   * the pan zoom detail into the original container.
   * 
   * default: true
   */
  wrap?: boolean;

  /**
   * The amount of time to wait in MS before the plugin client module tries to look for
   * and alter pan zoom elements.  Some renders take a little bit before they appear in the
   * dom to find.
   * 
   * The default is 1000
   */
  timeout?: number;
}
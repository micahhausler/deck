'use strict';

import { RENDER_IF_FEATURE } from './renderIfFeature.component';
import { STICKY_HEADER_COMPONENT } from './stickyHeader/stickyHeader.component';
import { COPY_TO_CLIPBOARD_COMPONENT } from './clipboard/copyToClipboard.component';
import { TIME_FORMATTERS } from './timeFormatters';
import { SELECT_ON_DOUBLE_CLICK_DIRECTIVE } from 'core/utils/selectOnDblClick.directive';

const angular = require('angular');

module.exports = angular.module('spinnaker.utils', [
  require('./moment.js'),
  require('./appendTransform.js'),
  COPY_TO_CLIPBOARD_COMPONENT,
  TIME_FORMATTERS,
  SELECT_ON_DOUBLE_CLICK_DIRECTIVE,
  require('./infiniteScroll.directive.js'),
  RENDER_IF_FEATURE,
  STICKY_HEADER_COMPONENT,
  require('./waypoints/waypoint.directive'),
  require('./waypoints/waypointContainer.directive'),
]);

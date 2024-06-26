/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable react/static-property-placement */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const generateId = (() => {
  let i = 0;
  return (prefix = "") => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

export default class LoginTab extends Component {
  static __ANT_PRO_LOGIN_TAB = true;

  static contextTypes = {
    tabUtil: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.uniqueId = generateId("login-tab-");
  }

  componentDidMount() {
    const { tabUtil } = this.context;
    if (tabUtil) {
      tabUtil.addTab(this.uniqueId);
    }
  }

  render() {
    return <TabPane {...this.props} />;
  }
}

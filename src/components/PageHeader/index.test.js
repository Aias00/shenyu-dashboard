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

import { getBreadcrumb } from "./index";
import { urlToList } from "../_utils/pathTools";

const routerData = {
  "/dashboard/analysis": {
    name: "分析页",
  },
  "/userinfo": {
    name: "用户列表",
  },
  "/userinfo/:id": {
    name: "用户信息",
  },
  "/userinfo/:id/addr": {
    name: "收货订单",
  },
};
describe("test getBreadcrumb", () => {
  it("Simple url", () => {
    expect(getBreadcrumb(routerData, "/dashboard/analysis").name).toEqual(
      "分析页",
    );
  });
  it("Parameters url", () => {
    expect(getBreadcrumb(routerData, "/userinfo/2144").name).toEqual(
      "用户信息",
    );
  });
  it("The middle parameter url", () => {
    expect(getBreadcrumb(routerData, "/userinfo/2144/addr").name).toEqual(
      "收货订单",
    );
  });
  it("Loop through the parameters", () => {
    const urlNameList = urlToList("/userinfo/2144/addr").map((url) => {
      return getBreadcrumb(routerData, url).name;
    });
    expect(urlNameList).toEqual(["用户列表", "用户信息", "收货订单"]);
  });

  it("a path", () => {
    const urlNameList = urlToList("/userinfo").map((url) => {
      return getBreadcrumb(routerData, url).name;
    });
    expect(urlNameList).toEqual(["用户列表"]);
  });
  it("Secondary path", () => {
    const urlNameList = urlToList("/userinfo/2144").map((url) => {
      return getBreadcrumb(routerData, url).name;
    });
    expect(urlNameList).toEqual(["用户列表", "用户信息"]);
  });
});

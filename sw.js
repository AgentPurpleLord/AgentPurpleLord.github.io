/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js");
/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/brand/bear.png",
    "revision": "a2f3b09e51c614c3813211c1cdda97ed"
  },
  {
    "url": "assets/brand/bear.svg",
    "revision": "8e8a258b55ba9f4ced137ecd91f5d534"
  },
  {
    "url": "assets/brand/brandicon.svg",
    "revision": "03bec0f83552429d0a4c478da14e2433"
  },
  {
    "url": "assets/brand/favicon-256x.png",
    "revision": "d86a696a7441702723b2bd39a4e1106e"
  },
  {
    "url": "assets/brand/favicon-512x.png",
    "revision": "d0d1990508d190b8c57009ae795b93b2"
  },
  {
    "url": "assets/brand/favicon-64x.png",
    "revision": "2f8fd3ed54b6ae418f9b9ae7133df226"
  },
  {
    "url": "assets/brand/favicon.png",
    "revision": "c63e8b629d3d9eaf4c5bb9dc494c8bc9"
  },
  {
    "url": "assets/img/box-mobile.jpg",
    "revision": "5db5018d84105727c2d33ea6051a846d"
  },
  {
    "url": "assets/img/box-tiny.jpg",
    "revision": "6a1be6cbf42bcaecb55e1ac3aa3d9b32"
  },
  {
    "url": "assets/img/box.jpg",
    "revision": "39498bff913ae3e733f6c5a56240babf"
  },
  {
    "url": "assets/img/drink-mobile.jpg",
    "revision": "130d8db99effeb86dcf7861ac725f3ba"
  },
  {
    "url": "assets/img/drink-tiny.jpg",
    "revision": "7e61538c77eb4e8a771340f567e0f0c6"
  },
  {
    "url": "assets/img/drink.jpg",
    "revision": "97443057ac5f686da4c1123a69655c44"
  },
  {
    "url": "assets/img/jedi-mobile.jpg",
    "revision": "6ee3c5756b2d9ce0f137cfd5f4910150"
  },
  {
    "url": "assets/img/jedi-tiny.jpg",
    "revision": "c125810389434f378631f4c472b894e6"
  },
  {
    "url": "assets/img/jedi.jpg",
    "revision": "a83fbadb41b56ce7a3c1cdda1cbefc11"
  },
  {
    "url": "css/construct-styles.css",
    "revision": "f3f58467fcde7bedcad2cc1ad2461025"
  },
  {
    "url": "css/style.css",
    "revision": "bac62708e96c7c42145abca3d0eaf6a8"
  },
  {
    "url": "index.html",
    "revision": "7c0e87238e205fb0b0d3b6c41ec69ae9"
  },
  {
    "url": "js/typewriter.js",
    "revision": "c550bf6816dfaae223c8230a63984037"
  },
  {
    "url": "manifest.json",
    "revision": "07ee29c0d83427db87094921adcf0817"
  },
  {
    "url": "package-lock.json",
    "revision": "060cde1b4496234949d39355c38ef572"
  },
  {
    "url": "package.json",
    "revision": "598826255608f8cd67a5d0eb3f1194a1"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/build/net45/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.props",
    "revision": "9de2736507a92c49bad063f95a3b5774"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/content/net45/web.config.install.xdt",
    "revision": "c9a4c6a4c15793e9b017292d684d907d"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/content/net45/web.config.uninstall.xdt",
    "revision": "d0a7cf957906abc0d772f98aa118ba50"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/content/net46/web.config.install.xdt",
    "revision": "60b28fa55930c04f63340724a9058d63"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/content/net46/web.config.uninstall.xdt",
    "revision": "d0a7cf957906abc0d772f98aa118ba50"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/lib/net45/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.dll",
    "revision": "c6a3bb6f7aae001303b5c397ec2d7327"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/lib/net45/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.xml",
    "revision": "09833ade85415db6c65b7d26e2c3d0c5"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8.nupkg",
    "revision": "cad8b96f8af7d3d405b1dc70ecf744ee"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/tools/net45/install.ps1",
    "revision": "66a2f1fd84476c5348f92ec3bdddf735"
  },
  {
    "url": "packages/Microsoft.CodeDom.Providers.DotNetCompilerPlatform.1.0.8/tools/net45/uninstall.ps1",
    "revision": "6d289bb0ba05a3c125c4abe373ff54b6"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/build/Microsoft.Net.Compilers.props",
    "revision": "6430753f65d6b4607a884c3b133c2aca"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/ThirdPartyNotices.rtf",
    "revision": "62db0c0ac66a92188951c0748bad55df"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/csc.exe",
    "revision": "05e6596878e3dcbc0378db9bde4d33af"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/csc.exe.config",
    "revision": "c19c031211f54a5a04f134ccc5cd9ee2"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/csc.rsp",
    "revision": "994645a8a8f39bd2d530410687ac6fc4"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/csi.exe",
    "revision": "66b15cdf3abdded37bbedd1032b1fe23"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/csi.exe.config",
    "revision": "ab0bab3fce41686c09dc3d34fe495cda"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/csi.rsp",
    "revision": "06eaf73d520961e50eba96cae7e3b366"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/Microsoft.Build.Tasks.CodeAnalysis.dll",
    "revision": "55aac598b5545551d00f32778579673e"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/Microsoft.CodeAnalysis.CSharp.Scripting.dll",
    "revision": "6fa77e6c6ccf43b4171faad28c0bcdf0"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/Microsoft.CodeAnalysis.Scripting.dll",
    "revision": "f481473455232c31beaf25a13a21aed3"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/Microsoft.CSharp.Core.targets",
    "revision": "bcb8b25bc15c8e104a2c3c0db8249447"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/Microsoft.DiaSymReader.Native.amd64.dll",
    "revision": "6432c8a41b367b6bc4f23f3a5e83add4"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/Microsoft.DiaSymReader.Native.x86.dll",
    "revision": "d57906417d09d763e27b167fdd0b9d53"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/Microsoft.VisualBasic.Core.targets",
    "revision": "ee629ac4198554b5816f54bfb7e2f7de"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/Microsoft.Win32.Primitives.dll",
    "revision": "9e12d3a3500f09d1ded5fe6830e4f8db"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.AppContext.dll",
    "revision": "b906366572177d428a8c3218b203b417"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Collections.Immutable.dll",
    "revision": "aad3b7c5828e16b4c8071e5ad64b3f7d"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Console.dll",
    "revision": "f6b8a8fe0174e9657c3544b0a4aca494"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Diagnostics.FileVersionInfo.dll",
    "revision": "385160c8e701dbc1e5c0ac86311a1b44"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Diagnostics.Process.dll",
    "revision": "d0e8fb14f69d08c29326741c40a7ed50"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Diagnostics.StackTrace.dll",
    "revision": "a823a96ba0a29a4f5f370b3c370de84a"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.IO.Compression.dll",
    "revision": "9661714578a06ecb815369db1d364fe9"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.IO.FileSystem.dll",
    "revision": "84abec24a10c4d4f4b10887cb85fde6a"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.IO.FileSystem.DriveInfo.dll",
    "revision": "6eec448e2bd4b0a4021ba15064d8ea2a"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.IO.FileSystem.Primitives.dll",
    "revision": "17a701768a6f07f5f96a07a8a37bc8bc"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.IO.Pipes.dll",
    "revision": "10a41217510e02b9175922fffab98feb"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Reflection.Metadata.dll",
    "revision": "50119d5845f7e74821108ff3f5058a63"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Security.AccessControl.dll",
    "revision": "02c7be1700a830dbf6584bd38fe0b17b"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Security.Claims.dll",
    "revision": "9d0f9e6289fa7313a48d395fe4247fa4"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Security.Cryptography.Algorithms.dll",
    "revision": "4558831716201309f8eecaabe2bc4901"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Security.Cryptography.Encoding.dll",
    "revision": "5f859d35ca74d84cce62533e086dc27f"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Security.Cryptography.Primitives.dll",
    "revision": "ecac83e551b639409899919d47cd7588"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Security.Cryptography.X509Certificates.dll",
    "revision": "ad0f84569d2b03838912788a6c3d66b9"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Security.Principal.Windows.dll",
    "revision": "9f443bed0261034c7e5d70fe0c84e518"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Text.Encoding.CodePages.dll",
    "revision": "44ce64675930c77d2ecf7c6dd08c30c5"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Threading.Thread.dll",
    "revision": "142aaee4446ef0b90b861a5dc72541c9"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.ValueTuple.dll",
    "revision": "9df593933196d553ec7d2a114da74c74"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Xml.ReaderWriter.dll",
    "revision": "d08a9c2e710f47617a0f4f1413d182f1"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Xml.XmlDocument.dll",
    "revision": "4ff16351f9421278af64f237ac4f3269"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Xml.XPath.dll",
    "revision": "08cee6ff6f528955c6b54fb179a6afb8"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/System.Xml.XPath.XDocument.dll",
    "revision": "2da1d5a52ea02c56d97ddd3dbd06fffb"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/vbc.exe",
    "revision": "e59a73ee6258960d4b28e7ccb65907b1"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/vbc.exe.config",
    "revision": "3f1f58125b7b99835eaac0899e1b8701"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/vbc.rsp",
    "revision": "4f218e36a1f10f061f9a212aa14f1e83"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/VBCSCompiler.exe",
    "revision": "afd00ed63df46741a9dd69d10a63fd3d"
  },
  {
    "url": "packages/Microsoft.Net.Compilers.2.6.1/tools/VBCSCompiler.exe.config",
    "revision": "b90b103b66fb6b518131eb31562c622d"
  },
  {
    "url": "pages/site-construct.html",
    "revision": "1371989ec9b49801a5a505edd70e43d1"
  },
  {
    "url": "sw_old.js",
    "revision": "0b512e584abdc34c0b4c3e25810a8857"
  },
  {
    "url": "workbox-config.js",
    "revision": "5ff71eb4ceaffb53769cc946b8a2fbe5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

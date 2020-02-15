﻿
// This file is part of Natural Docs, which is Copyright © 2003-2018 Code Clear LLC.
// Natural Docs is licensed under version 3 of the GNU Affero General Public License (AGPL)
// Refer to License.txt for the complete details


using System;
using NUnit.Framework;


namespace CodeClear.NaturalDocs.Engine.Tests.Languages.Java
	{
	[TestFixture]
	public class PrototypeDetection : Framework.TestTypes.PrototypeDetection
		{

		[Test]
		public void All ()
			{
			TestFolder("Languages/Java/Prototype Detection");
			}

		}
	}
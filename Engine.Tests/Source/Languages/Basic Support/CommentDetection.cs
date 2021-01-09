﻿
// This file is part of Natural Docs, which is Copyright © 2003-2021 Code Clear LLC.
// Natural Docs is licensed under version 3 of the GNU Affero General Public License (AGPL)
// Refer to License.txt for the complete details


using System;
using NUnit.Framework;


namespace CodeClear.NaturalDocs.Engine.Tests.Languages.BasicSupport
	{
	[TestFixture]
	public class CommentDetection : Framework.TestTypes.CommentDetection
		{

		[Test]
		public void All ()
			{
			TestFolder("Languages/Basic Support/Comment Detection", "Shared ND Config/Basic Language Support");
			}

		}
	}
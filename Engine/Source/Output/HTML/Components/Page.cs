﻿/* 
 * Class: CodeClear.NaturalDocs.Engine.Output.HTML.Components.Page
 * ____________________________________________________________________________
 * 
 * A class to create the generic scaffolding around a HTML page and write it to disk.
 * 
 * 
 * Threading: Not Thread Safe
 * 
 *		This class is only designed to be used by one thread at a time.  Each thread should create its own object.
 * 
 */

// This file is part of Natural Docs, which is Copyright © 2003-2021 Code Clear LLC.
// Natural Docs is licensed under version 3 of the GNU Affero General Public License (AGPL)
// Refer to License.txt for the complete details


using System;


namespace CodeClear.NaturalDocs.Engine.Output.HTML.Components
	{
	public class Page : Component
		{

		// Group: Functions
		// __________________________________________________________________________


		/* Constructor: Page
		 */
		public Page (Context context) : base (context)
			{
			}


		/* Function: Build
		 * Builds an output file based on the passed parameters.  Using this function centralizes standard elements of the page
		 * structure like the doctype, charset, and embedded comments.
		 */
		public void Build (Path outputPath, string pageTitle, string pageContentHTML, PageType pageType)
			{
			string pageTypeName = PageTypes.NameOf(pageType);
			string jsRelativePrefix = context.Target.MakeRelativeURL(outputPath, Paths.Style.OutputFolder(context.Target.OutputFolder)) + '/';

			WriteTextFile(outputPath, 

				"<!DOCTYPE html>" +
				"\r\n\r\n" +

				"<html>" +
					"<head>" +

						"<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />" +

						// This turns off Internet Explorer 11's compatibility view, since we might get hit by it if "Display intranet in Compatibility View" is
						// turned on.
						"<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">" +

						"<title>" + pageTitle.ToHTML() + "</title>" +

						"<link rel=\"stylesheet\" type=\"text/css\" href=\"" +
							context.Target.MakeRelativeURL(outputPath, Paths.Style.OutputFolder(context.Target.OutputFolder) + "/main.css") +
							"\" />" +

						"<script type=\"text/javascript\" src=\"" + jsRelativePrefix + "main.js\"></script>" +
						"<script type=\"text/javascript\">" +
							"NDLoader.LoadJS(\"" + pageTypeName + "\", \"" + jsRelativePrefix + "\");" +
						"</script>" +

					"</head>" + 

						"\r\n\r\n" +
						"<!-- Generated by Natural Docs, version " + Instance.VersionString + " -->" +
						"\r\n\r\n" +

						// The IE mark of the web.  Without it Internet Explorer will pop up messages and possibly block JavaScript 
						// from running from the local drive.  Note that it MUST have at least one \r\n after it or it won't work.
						// Microsoft Edge doesn't need it, but if it has it, it must be set to http://localhost or else it will block pages
						// from loading external JavaScript files, possibly because it sees it as a cross domain request.
						"<!-- saved from url=(0016)http://localhost -->" +
						"\r\n\r\n" +

					"<body onload=\"NDLoader.OnLoad('" + pageTypeName + "');\" " +
									"class=\"NDPage ND" + pageTypeName + "Page\">" +

						pageContentHTML +
								
					"</body>" +
				"</html>");
			}

		}
	}


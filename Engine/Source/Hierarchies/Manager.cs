﻿/* 
 * Class: CodeClear.NaturalDocs.Engine.Hierarchies.Manager
 * ____________________________________________________________________________
 * 
 * A module to handle the different hierarchies within Natural Docs.
 * 
 * 
 * Topic: Usage
 * 
 *		- Call <Engine.Instance.Start()> which will start this module.
 *			
 */

// This file is part of Natural Docs, which is Copyright © 2003-2021 Code Clear LLC.
// Natural Docs is licensed under version 3 of the GNU Affero General Public License (AGPL)
// Refer to License.txt for the complete details


using System;
using System.Collections.Generic;


namespace CodeClear.NaturalDocs.Engine.Hierarchies
	{
	public class Manager : Module
		{
		
		// Group: Functions
		// __________________________________________________________________________
		
		
		/* Constructor: Manager
		 */
		public Manager (Engine.Instance engineInstance) : base (engineInstance)
			{
			var fileHierarchy = new Hierarchy("File", "Files", HierarchyType.File);

			var classHierarchy = new Hierarchy("Class", "Classes", HierarchyType.Class);

			var databaseHierarchy = new Hierarchy("Database", null, HierarchyType.Database);

			hierarchies = new Hierarchy[] { fileHierarchy, classHierarchy, databaseHierarchy };

			classHierarchyID = classHierarchy.ID;
			}

		protected override void Dispose (bool strictRulesApply)
			{
			}
		
		/* Function: Start
		 * 
		 * Starts the module, returning whether it was successful.  If there were any  errors they will be added to errorList.
		 * 
		 * Dependencies:
		 * 
		 *		- Currently there are no dependencies.
		 */
		public bool Start (Errors.ErrorList errorList)
			{
			return true;
			}



		// Group: Information Functions
		// __________________________________________________________________________


		/* Function: FromID
		 * Returns the <Hierarchy> associated with the passed ID, or null if none.
		 */
		public Hierarchy FromID (int hierarchyID)
			{
			foreach (var hierarchy in hierarchies)
				{
				if (hierarchy.ID == hierarchyID)
					{  return hierarchy;  }
				}

			return null;
			}

		/* Function: FromName
		 * Returns the <Hierarchy> associated with the passed name, or null if none.  This will search both the singular
		 * and plural names.
		 */
		public Hierarchy FromName (string name)
			{
			Collections.KeySettings normalizationSettings = Collections.KeySettings.IgnoreCase;

			string normalizedName = name.NormalizeKey(normalizationSettings);

			foreach (var hierarchy in hierarchies)
				{
				if (hierarchy.Name.NormalizeKey(normalizationSettings) == normalizedName)
					{  return hierarchy;  }
				if (hierarchy.PluralName != null &&
					hierarchy.PluralName.NormalizeKey(normalizationSettings) == normalizedName)
					{  return hierarchy;  }
				}

			return null;
			}

		/* Function: FromType
		 * Returns the <Hierarchy> associated with the passed <HierarchyType>.
		 */
		public Hierarchy FromType (HierarchyType hierarchyType)
			{
			foreach (var hierarchy in hierarchies)
				{
				if (hierarchy.Type == hierarchyType)
					{  return hierarchy;  }
				}

			return null;
			}



		// Group: Convenience Functions
		// __________________________________________________________________________


		/* Function: IsClassHierarchy
		 * Returns whether the passed ID is the class hierarchy ID.  A convenience function since this is used so often.
		 */
		public bool IsClassHierarchy (int hierarchyID)
			{
			// We're assuming the class hierarchy is always defined, which should be pretty safe, so we only have to test
			// against classHierarchyID and not also test against zero.  However, if the class hierarchy can ever be undefined
			// then this logic needs to be updated or else it will return true for every non-hierarchy element.

			#if DEBUG
			if (classHierarchyID == 0)
				{  throw new Exception("IsClassHierarchy needs to be updated if classHierarchyID can be zero.");  }
			#endif

			return (hierarchyID == classHierarchyID);
			}



		// Group: Variables
		// __________________________________________________________________________


		/* var: hierarchies
		 * An array of the <Hierarchies> defined.  Since it should be a short, hard-coded list for now it's more efficient to
		 * just put them in an array.
		 */
		protected Hierarchy[] hierarchies;

		/* var: classHierarchyID
		 * A copy of the class hierarchy ID since it is used so often.  Prevents some lookups in <hierarchies>.
		 */
		protected int classHierarchyID;

		}
	}
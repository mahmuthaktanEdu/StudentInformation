﻿using jQueryApi;
using StudentIN.Northwind;
using Serenity;

namespace StudentIN.BasicSamples
{
    /// <summary>
    /// Styling for columns is done with CSS in site.basicsamples.less file.
    /// When comparing this to MultiColumnDialog sample, you may notice that
    /// this version requires much less C# and CSS code.
    /// </summary>
    [Responsive]
    public class MultiColumnResponsiveDialog : OrderDialog
    {
        public MultiColumnResponsiveDialog()
        {
        }
    }

    [DialogType(typeof(MultiColumnResponsiveDialog))]
    public class MultiColumnResponsiveGrid : OrderGrid
    {
        public MultiColumnResponsiveGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}
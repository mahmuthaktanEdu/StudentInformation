﻿
namespace StudentIN.BasicSamples
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class OrdersByShipperResponse : ServiceResponse
    {
        public List<JsDictionary<String, Object>> Values { get; set; }
        public List<String> ShipperKeys { get; set; }
        public List<String> ShipperLabels { get; set; }
    }

}


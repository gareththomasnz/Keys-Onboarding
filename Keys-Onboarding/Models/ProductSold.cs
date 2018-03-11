using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Keys_Onboarding.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ProductSold
    {
        public int Id { get; set; }
        
        public int ProductId { get; set; }
        
        public int CustomerId { get; set; }
        
        public int StoreId { get; set; }

        [DataType(DataType.DateTime, ErrorMessage = "Date is not in the correct format")]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        
        public System.DateTime DateSold { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Product Product { get; set; }
        public virtual Store Store { get; set; }
    }
}

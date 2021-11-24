import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService, responseProduct } from 'src/app/services/product.service';
import { DashboardInputComponent } from './dashboard-input/dashboard-input.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nama', 'weight', 'status', 'symbol', 'action'];
  dataSource: responseProduct

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.doGetProduct();
  }

  async openDialog(datas?: any): Promise<any> {
    let dialogRef = await this.dialog.open(DashboardInputComponent, {
      width: '750px',
      data: datas ? datas : {},
    });

    dialogRef.afterClosed().subscribe( res => {
      console.log('check ',res)
      if(res?.action === 'add') {
        this.doAddProduct(res.data)
      } else if ( res?.action === 'update') {
        //action untuk update
        this.doUpdateProduct(res.data)
      } else {
        return null
      }
    }, err => {
      console.error(err)
    })

  }

  doUpdateProduct(payload: any) {
    this.productService.updateProduct(payload).subscribe(
      res => {
        console.log(res);
        this.doGetProduct();
    }, err => {
        console.error(err)
    })


  }

  doGetProduct() {
    this.productService.getProductAll().subscribe(
      res => {
        console.log(res);
        this.dataSource = res
    }, err => {
        console.error(err)
        Swal.fire({
          title: 'Error!',
          text: `${err.message}`,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
    })
  }

  doAddProduct(payload: any) {
    this.productService.createProduct(payload).subscribe(
      res => {
        console.log(res);
        this.doGetProduct();
    }, err => {
        console.error(err)
    })

  }

  doDeleteProduct(idproduct: number) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(idproduct). subscribe(
          res => {
            console.log(res);
            swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.doGetProduct();
      }, err => {
        console.error(err)
        swalWithBootstrapButtons.fire(
          'Failed Deleted',
          'Your file has fail deleted.',
          'error'
        )
      })
    } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}

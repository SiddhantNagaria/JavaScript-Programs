var arr = new Array(7,5,6,9,0,1,3,2);

for(let i=1; i<arr.length; i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
for(let k =0; k<arr.length;k++) {
    console.log(arr[k]);
}

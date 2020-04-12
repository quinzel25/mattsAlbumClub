// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
// });




let app = new Vue({
    el: "#app",
    data: {
        newAlbumName: '',
        newArtistName: '',
        newHostName: '',
        albums: [{ name: "Master of Puppets", artist: "Metallica", host: "Stony"  }],
        //mostRecentSignIn: '',
        //message: '',
        //seeMessage: false,
        errors: []
    },
    methods: {
        addAlbum() {
            this.errors = []
            if (this.newAlbumName && this.newArtistName && this.newHostName) {
                let album = { name: this.newAlbumName, artist: this.newArtistName, host: this.newHostName  }
                //this.students.push(student)
                //this.students.sort(function (s1, s2) { return s1.name > s2.name ? 1 : -1 })
                this.albums.push(album)
                //this.albums.sort(function (s1,s2) { return s1.name > s2.name ? 1 : -1})
                console.log("added \"" + this.newAlbumName+"\"")
                this.newAlbumName = ''
                this.newArtistName = ''
                this.newHostName = ''

            } else {
                this.errors.push('All fields are required.')
            }
        },
        // checked(student) {
        //     this.message = student.present ? 'Welcome, ' : 'Goodbye, '
        //     this.mostRecentSignIn = student.name
        //     this.showMessage()
        // },
        // showMessage() {
        //     this.seeMessage = true
        //     setTimeout(() => {
        //         this.seeMessage = false
        //     }, 3000)
        // }
    },
})

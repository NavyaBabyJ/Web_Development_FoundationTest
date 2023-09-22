document.addEventListener('DOMContentLoaded', function() {

    var DepartureDate = document.getElementById('departureDate');
    var ReturnDate = document.getElementById('returnDate');
    var NumDays=document.getElementById('numdays')


   //calculate days
   const today = new Date();
   const maxDate= new Date(today.getFullYear()+1,today.getMonth(),today.getDate());
   const minDate= new Date(today.getFullYear(),today.getMonth(),today.getDate());

   DepartureDate.max=formattedDates(maxDate);
   ReturnDate.min=formattedDates(minDate);
   //formatted date
   function formattedDates(date){

       //yyyy-mm-dd
       const year=date.getFullYear();
       let month=(date.getMonth()+1).toString().padStart(2,"0");
       let day=date.getDate().toString().padStart(2,"0");
       return `${year}-${month}-${day}`;

   }

   function calculateDays() {
       const fromDateObj = new Date(DepartureDate.value);
       const toDateObj = new Date(ReturnDate.value);

       if (!isNaN(fromDateObj) && !isNaN(toDateObj)) {
           const timeDifference = toDateObj - fromDateObj;
           const totalDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

           if (totalDays >= 0) {
            NumDays.value = totalDays;
           } else {
            NumDays.value = ''; // Clear the field if the dates are invalid
           }
       } else {
        NumDays.value = ''; // Clear the field if the dates are invalid
       }
   }

   DepartureDate.addEventListener('change', calculateDays);
   ReturnDate.addEventListener('change', calculateDays);


   
    // Function to validate Employee ID
    function validateEmployeeID() {
        var employeeID = document.getElementById('txtEmployeeID').value;
        var employeeIdError = document.getElementById('employeeIdError');
        employeeIdError.textContent = '';

        if(employeeID.trim() === '') {
            employeeIdError.textContent = 'Employee ID is required';
            return false;
        }
        return true;
    }

    // Function to validate Employee Name
    function validateFullName() {
        var fullName = document.getElementById('txtFullName').value;
        var fullNameError = document.getElementById('fullNameError');
        fullNameError.textContent = '';

        if(fullName.trim() === '') {
            fullNameError.textContent = 'Employee Name is required';
            return false;
        }
        return true;
    }

    // Function to validate Project
    function validateProject() {
        var project = document.getElementById('txtproject').value;
        var projectError = document.getElementById('projectError');
        projectError.textContent = '';

        if(project.trim() === '') {
            projectError.textContent = 'Project is required';
            return false;
        }
        return true;
    }

    // Function to validate Cause for Travel
    function validateCause() {
        var cause = document.getElementById('txtcause').value;
        var causeError = document.getElementById('causeError');
        causeError.textContent = '';

        if(cause.trim() === '') {
            causeError.textContent = 'Cause for Travel is required';
            return false;
        }
        return true;
    }

    // Function to validate Source
    function validateSource() {
        var source = document.getElementById('txtsource').value;
        var sourceError = document.getElementById('sourceError');
        sourceError.textContent = '';

        if(source.trim() === '') {
            sourceError.textContent = 'Source is required';
            return false;
        }
        return true;
    }

    // Function to validate Destination
    function validateDestination() {
        var destination = document.getElementById('txtdestination').value;
        var destinationError = document.getElementById('destinationError');
        destinationError.textContent = '';

        if(destination.trim() === '') {
            destinationError.textContent = 'Destination is required';
            return false;
        }
        return true;
    }

    // Function to validate Departure Date
    function validateDepartureDate() {
        var departureDate = document.getElementById('departureDate').value;
        var departureDateError = document.getElementById('departureDateError');
        departureDateError.textContent = '';

        if(departureDate.trim() === '') {
            departureDateError.textContent = 'Departure Date is required';
            return false;
        }
        return true;
    }

    // Function to validate Return Date
    function validateReturnDate() {
        var returnDate = document.getElementById('returnDate').value;
        var returnDateError = document.getElementById('returnDateError');
        returnDateError.textContent = '';

        if(returnDate.trim() === '') {
            returnDateError.textContent = 'Return Date is required';
            return false;
        }
        return true;
    }

    // Function to validate Mode of Travel
    function validateModeOfTravel() {
        var modeOfTravel = document.getElementById('txtmode').value;
        var modeError = document.getElementById('modeError');
        modeError.textContent = '';

        if(modeOfTravel.trim() === '') {
            modeError.textContent = 'Mode of Travel is required';
            return false;
        }
        return true;
    }

    // Function to validate Priority
    function validatePriority() {
        var priority = document.getElementById('priority').value;
        var priorityError = document.getElementById('priorityError');
        priorityError.textContent = '';

        if(priority === '') {
            priorityError.textContent = 'Priority is required';
            return false;
        }
        return true;
    }

    // Function to validate Number of Days
    function validateNumberOfDays() {
        var departureDate = new Date(document.getElementById('departureDate').value);
        var returnDate = new Date(document.getElementById('returnDate').value);
        var numDaysInput = document.getElementById('numdays');
        var noOfDaysError = document.getElementById('noOfDaysError');
        noOfDaysError.textContent = '';

        if(departureDate > returnDate) {
            noOfDaysError.textContent = 'Return Date must be after Departure Date';
            return false;
        }

        var timeDifference = returnDate.getTime() - departureDate.getTime();
        var numDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
        numDaysInput.value = numDays;

        return true;
    }

    // Function to validate the entire form
    function validateForm() {
        var isValid = true;

        isValid = validateEmployeeID() && isValid;
        isValid = validateFullName() && isValid;
        isValid = validateProject() && isValid;
        isValid = validateCause() && isValid;
        isValid = validateSource() && isValid;
        isValid = validateDestination() && isValid;
        isValid = validateDepartureDate() && isValid;
        isValid = validateReturnDate() && isValid;
        isValid = validateModeOfTravel() && isValid;
        //isValid = validatePriority() && isValid;
        // isValid = validateNumberOfDays() && isValid;

        return isValid;
    }

    // Submit event listener for the form
    document.getElementById('frmtravel').addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

});


    const translations = {
    en: {
        hero: {
            title: "MetaClass - University Booking System",
            welcomeTitle: "University Resource Booking System",
            dashboardType: "Manage classrooms and equipment bookings efficiently",
            welcomeUser: "Welcome",
            getStarted: "Get Started",
            easyBooking: "Easy Booking",
            easyBookingDesc: "Book classrooms and equipment with just a few clicks",
            secureAccess: "Secure Access",
            secureAccessDesc: "Role-based access control ensures data security",
            realTimeNotifications: "Real-time Notifications",
            realTimeNotificationsDesc: "Get instant updates on your booking status"
        },
        dashboard: {
            totalBookings: "Total Bookings",
            pending: "Pending Approval",
            users: "Users",
            classrooms: "Classrooms",
            room: "Room",
            teacher: "Teacher",
            date: "Date",
            time: "Time",
            quantity: "Quantity",
            approve: "Approve",
            reject: "Reject",
            cancel: "Cancel",
            noBookings: "No bookings found.",
            alertApproved: "Booking approved!",
            alertRejected: "Booking rejected!",

            status: {
                confirmed: "Confirmed",
                pending: "Pending",
                rejected: "Rejected",
                cancelled: "Cancelled"
            },

            myBookingsStat: "My Bookings",
            pendingStat: "Pending",
            confirmedStat: "Confirmed",

            teacherCreate: {
                title: "Need to Book a Resource?",
                subtitle: "Create a new booking for classrooms or equipment",
                button: "Create New Booking"
            },

            department: "Department",
            code: "Code",
            classroom: "Classroom",
            day: "Day",
            time: "Time",
            instructor: "Instructor",
            semester: "Semester",
            note: "Note:",
            noteText: "Rooms used in these schedules will not be available for booking during their scheduled times."

        },
        page: {
            dashboardTitle: "Dashboard - MetaClass"
        },
        departments: {
            cs: "Computer Science",
            physics: "Physics"
        },
        days: {
            monday: "Monday",
            wednesday: "Wednesday"
        },
        rooms: {
            room201: "Room 201 - Engineering Building",
            room102: "Room 102 - Science Building"
        },
        nav: {
            dashboard: "Dashboard",
            newBooking: "New Booking",
            myBookings: "My Bookings",
            admin: "Admin",
            account: "Account"
        },
        admin: {
            panel: "Admin Panel",
            manageUsers: "Manage Users",
            manageBookings: "Manage Bookings",
            classrooms: "Classrooms",
            equipment: "Equipment",
            schedules: "Schedules",
            manageUsersDesc: "Add, edit, or remove users and reset passwords",
            manageBookingsDesc: "Approve, reject, or delete bookings",
            classroomsDesc: "View and manage classroom inventory",
            equipmentDesc: "Manage equipment inventory and availability",
            schedulesDesc: "View and manage predefined class schedules",
            dashboardDesc: "View system statistics and recent activity"
        },
        classrooms: {
            title: "Classrooms",
            addClassroom: "Add New Classroom",
            room: "Room",
            building: "Building",
            capacity: "Capacity",
            features: "Features",
            active: "Active",
            inactive: "Inactive",
            backToAdmin: "Back to Admin Panel",
            feature_projector: "Projector",
            feature_ac: "AC",
            feature_whiteboard: "Whiteboard",
            feature_smarttv: "Smart TV",
            feature_sound: "Sound System",
            create: "Create New Classroom",
            name: "Classroom Name",
            capacity: "Capacity",
            location: "Location",
            equipment: "Equipment",
            count: "Count",
            remove: "Remove",
            createBtn: "Create Classroom",
            cancel: "Cancel",
            alertMissingEquipment: "Please enter equipment name and count.",
            alertCreated: "Classroom created successfully!",
            alertError: "Error creating classroom."
        },

        equipment: {
            title: "Equipment Inventory",
            addEquipmentBtn: "Add New Equipment",
            name: "Name",
            category: "Category",
            totalQuantity: "Total Quantity",
            available: "Available",
            description: "Description",
            status: "Status",
            active: "Active",
            inactive: "Inactive",
            backToAdmin: "Back to Admin Panel",
            projector: "Projector",
            pc: "PC",
            labMicroscope: "Lab Microscope",
            avEquipment: "AV Equipment",
            computer: "Computer",
            biology: "Biology",
            fullHDProjector: "Full HD Projector",
            microComputer: "MicroComputer",
            microscopeDetails: "Magnification 40x-1000x",
            createTitle: "Create New Equipment",
            nameLabel: "Equipment Name *",
            typeLabel: "Equipment Type *",
            typeSelect: "-- Select Type --",
            other: "Other",
            quantityLabel: "Quantity *",
            createBtn: "Create Equipment",
            cancelBtn: "Cancel",
            alertCreated: "Equipment successfully created!"
        },

        roles: {
            teacher: "Teacher",
            admin: "Admin"
    },

        user: {
            manageUsers: "Manage Users",
            addUser: "Add New User",
            fullName: "Full Name",
            email: "Email",
            role: "Role",
            actions: "Actions",
            edit: "Edit",
            reset: "Reset",
            delete: "Delete",
            back: "Back to Admin Panel",
            editUserTitle: "Edit User",
            createUserTitle: "Create New User",
            firstName: "First Name",
            lastName: "Last Name",
            saveChanges: "Save Changes",
            alertUpdated: "User updated!",
            password: "Password",
            alertUpdated: "User created!"
        },

        booking: {
            createBookingTitle: "Create New Booking",
            bookingType: "Booking Type",
            classroom: "Classroom",
            equipment: "Equipment",
            date: "Date",
            startTime: "Start Time",
            endTime: "End Time",
            departments: "Departments",
            students: "Students",
            searchClassrooms: "Search Available Classrooms",
            building: "Building",
            allBuildings: "All Buildings",
            mainBuilding: "Main Building",
            building5: "Building №5",
            minCapacity: "Min Capacity",
            requiredEquipment: "Required Equipment",
            anyEquipment: "Any Equipment",
            minQuantity: "Min Quantity",
            searchBtn: "Search Classrooms",
            availableClassrooms: "Available Classrooms",
            selectEquipment: "Select Equipment",
            quantity: "Quantity",
            buildingOptional: "Building (Optional)",
            classroomOptional: "Classroom (Optional)",
            notes: "Notes",
            createBookingBtn: "Create Booking",
            cancelBtn: "Cancel",
            equipmentSelect : "Select Equipment",
            myBookings: {
                pageTitle: "My Bookings",
                brandText: "METACLASS",
                dashboard: "Dashboard",
                newBooking: "New Booking",
                admin: "Admin",
                adminPanel: "Admin Panel",
                manageUsers: "Manage Users",
                classrooms: "Classrooms",
                schedules: "Schedules",
                equipment: "Equipment",
                account: "Account",
                darkLightMode: "Dark/Light Mode",
                changePassword: "Change Password",
                logout: "Logout",
                bookingCreated: "Booking created successfully.",
                filterAll: "All",
                filterPending: "Pending",
                filterConfirmed: "Confirmed",
                filterRejected: "Rejected",
                classroomBooking: "Classroom Booking",
                equipmentBooking: "Equipment Booking",
                statusPending: "Pending",
                statusConfirmed: "Confirmed",
                location: "Location:",
                capacity: "Capacity: ",
                equipment: "Equipment:",
                students: "students",
                details: "Details",
                approve: "Approve",
                reject: "Reject",
                cancel: "Cancel",
                created: "Created: Nov 17, 2025",
                forClassroom: "For Classroom:",
                university: "MetaClass University Booking System",
                poweredBy: "Powered by MetaClass Technology"
            }
        },

        account: {
            themeToggle: "Dark/Light Mode",
            changePassword: "Change Password",
            logout: "Logout",
            login: "Login"
        },
        login: {
            pageTitle: "Login - MetaClass",
            welcomeBack: "Welcome",
            signInAccess: "Sign in to access your account",
            emailAddress: "Email Address",
            password: "Password",
            rememberMe: "Remember me on this device",
            signIn: "Sign In",
            forgotPassword: "Forgot password?"
        },
        forgotPassword: {
            pageTitle: "Forgot Password",
            title: "Reset Password",
            subtitle: "Enter your email address and we will send you a verification code.",
            sendCode: "Send Verification Code",
            backToLogin: "Back to Login"
        },
        verifyCode: {
            pageTitle: "Verify Code",
            title: "Verify Your Email",
            subtitle: "We sent a 6-digit verification code to your email.",
            verifyBtn: "Verify",
            backToStart: "Back to restart"
        },
        newPassword: {
            pageTitle: "New Password",
            title: "Create New Password",
            subtitle: "Your new password must be different from the previous one.",
            saveBtn: "Save New Password"
        },
        changePassword: {
            title: "Change Password - MetaClass",
            titleOnly: "Change Password",
            firstLoginTitle: "First Login:",
            firstLoginText: "You must change your password before continuing.",
            currentPassword: "Current Password",
            newPassword: "New Password",
            confirmPassword: "Confirm Password",
            passwordRule: "Password must be at least 6 characters and contain uppercase, lowercase, and numbers.",
            btnChange: "Change Password",
            cancel: "Cancel",            
            required: "Required",
            tooShort: "Too short",
            noMatch: "Does not match",
            currentRequired: "Current password is required.",
            success: "Password changed successfully!"
        },
        
        bookings: {
            recent: "Recent Bookings",
            viewAll: "View All"
        },
        booking_details:
        {
            bookingDetails: "Booking Details",
            pending: "Pending",
            teacherInfo: "Teacher Information",
            name: "Name",
            email: "Email",
            bookingInfo: "Booking Information",
            type: "Type",
            classroom: "Classroom",
            date: "Date",
            time: "Time",
            status: "Status",
            created: "Created",
            lastUpdated: "Last Updated",
            building: "Building",
            roomNumber: "Room Number",
            capacity: "Capacity",
            availableEquipment: "Available Equipment",
            additionalNotes: "Additional Notes",
            departmentInfo: "Department Information",
            studentList: "Student List",
            approve: "Approve",
            reject: "Reject",
            delete: "Delete",
            backToList: "Back to List",
            reasonForRejection: "Reason for Rejection",
            rejectBooking: "Reject Booking",
            cancel: "Cancel",
            emailNotificationsPending: "Email notifications are pending"
        },
        booking_equipment:
        {

            equipmentBookingDetails: "Equipment Booking Details",
            confirmed: "Confirmed",
            teacherInfo: "Teacher Information",
            name: "Name",
            email: "Email",
            bookingInfo: "Booking Information",
            type: "Type",
            equipment: "Equipment",
            date: "Date",
            time: "Time",
            status: "Status",
            created: "Created",
            lastUpdated: "Last Updated",
            equipmentInfo: "Equipment Information",
            equipmentName: "Equipment Name",
            quantityRequested: "Quantity Requested",
            totalAvailable: "Total Available",
            forClassroom: "For Classroom",
            additionalNotes: "Additional Notes",
            backToList: "Back to List",
            emailNotificationsPending: "Email notifications are pending"
        },
        modal: {
            common: {
                cancel: "Cancel",
                close: "Close"
            },
            reject: {
                title: "Reject Booking",
                reason: "Rejection Reason",
                btn: "Reject Booking"
            },
            cancel: {
                title: "Cancel Booking",
                reason: "Reason",
                btn: "Cancel Booking"
            }
        },
        notifications: {
            title: "Notifications",
            none: "No notifications",
            markAllRead: "Mark All as Read"
        },
        footer: {
            copyright: "© 2025 - MetaClass University Booking System",
            poweredBy: "Powered by MetaClass Technology"
        }
    },

    ru: {
        hero: {
            title: "MetaClass - Система бронирования ресурсов университета",
            welcomeUser: "Добро пожаловать",
            welcomeTitle: "Система бронирования ресурсов университета",
            dashboardType: "Эффективное управление бронированием аудиторий и оборудования",
            getStarted: "Начать",
            easyBooking: "Простое бронирование",
            easyBookingDesc: "Бронируйте аудитории и оборудование всего в несколько кликов",
            secureAccess: "Безопасный доступ",
            secureAccessDesc: "Ролевой доступ обеспечивает безопасность данных",
            realTimeNotifications: "Уведомления в реальном времени",
            realTimeNotificationsDesc: "Получайте мгновенные обновления о статусе бронирования"
        },
        dashboard: {
            totalBookings: "Всего бронирований",
            pending: "Ожидают подтверждения",
            users: "Пользователи",
            classrooms: "Аудитории",
            room: "Аудитория",
            teacher: "Преподаватель",
            date: "Дата",
            time: "Время",
            quantity: "Количество",
            approve: "Одобрить",
            reject: "Отклонить",
            cancel: "Отменить",
            noBookings: "Бронирования не найдены.",
            alertApproved: "Бронирование одобрено!",
            alertRejected: "Бронирование отклонено!",

            status: {
                confirmed: "Подтверждено",
                pending: "В ожидании",
                rejected: "Отклонено",
                cancelled: "Отменено"
            },

            myBookingsStat: "Мои бронирования",
            pendingStat: "В ожидании",
            confirmedStat: "Подтверждено",

            teacherCreate: {
                title: "Хотите забронировать ресурс?",
                subtitle: "Создайте новое бронирование аудитории или оборудования",
                button: "Создать бронирование"
            },

            department: "Факультет",
            code: "Код",
            classroom: "Аудитория",
            day: "День",
            time: "Время",
            instructor: "Преподаватель",
            semester: "Семестр",
            note: "Примечание:",
            noteText: "Аудитории, используемые по расписанию, будут недоступны для бронирования в это время."

        },
        page: {
            dashboardTitle: "Панель управления - MetaClass"
        },
        departments: {
            cs: "Компьютерные науки",
            physics: "Физика"
        },
        days: {
            monday: "Понедельник",
            wednesday: "Среда"
        },
        rooms: {
            room201: "Аудитория 201 - Инженерное здание",
            room102: "Аудитория 102 - Научное здание"
        },
        nav: {
            dashboard: "Панель",
            newBooking: "Новое бронирование",
            myBookings: "Мои бронирования",
            admin: "Админ",
            account: "Аккаунт"
        },
        admin: {
            panel: "Админ-панель",
            manageUsers: "Управление пользователями",
            manageBookings: "Управление бронированием",
            classrooms: "Аудитории",
            equipment: "Оборудование",
            schedules: "Расписание",
            manageUsersDesc: "Добавлять, изменять, удалять пользователей и сбрасывать пароли",
            manageBookingsDesc: "Одобрять, отклонять или удалять бронирования",
            classroomsDesc: "Просмотр и управление аудиториями",
            equipmentDesc: "Управление оборудованием и доступностью",
            schedulesDesc: "Просмотр и управление расписаниями",
            dashboardDesc: "Просмотр статистики и активности системы"
        },
        classrooms: {
            title: "Аудитории",
            addClassroom: "Добавить аудиторию",
            room: "Аудитория",
            building: "Здание",
            capacity: "Вместимость",
            features: "Оснащение",
            active: "Активна",
            inactive: "Неактивна",
            backToAdmin: "Назад в панель администратора",
            
            feature_projector: "Проектор",
            feature_ac: "Кондиционер",
            feature_whiteboard: "Доска",
            feature_smarttv: "Смарт ТВ",
            feature_sound: "Аудиосистема",
            create: "Создать аудиторию",
            name: "Название аудитории",
            capacity: "Вместимость",
            location: "Местоположение",
            equipment: "Оборудование",
            count: "Количество",
            remove: "Удалить",
            createBtn: "Создать аудиторию",
            cancel: "Отмена",
            alertMissingEquipment: "Пожалуйста, введите название оборудования и количество.",
            alertCreated: "Аудитория успешно создана!",
            alertError: "Ошибка при создании аудитории."
        },
        
        equipment: {
            title: "Инвентаризация оборудования",
            addEquipmentBtn: "Добавить новое оборудование",
            name: "Название",
            category: "Категория",
            totalQuantity: "Общее количество",
            available: "Доступно",
            description: "Описание",
            status: "Статус",
            active: "Активно",
            inactive: "Неактивно",
            backToAdmin: "Назад в панель администратора",            
            projector: "Проектор",
            pc: "ПК",
            labMicroscope: "Лабораторный микроскоп",           
            avEquipment: "AV оборудование",
            computer: "Компьютер",
            biology: "Биология",
            fullHDProjector: "Full HD проектор",
            microComputer: "Микрокомпьютер",
            microscopeDetails: "Увеличение 40x-1000x",
            createTitle: "Создать новое оборудование",
            nameLabel: "Название оборудования *",
            typeLabel: "Тип оборудования *",
            typeSelect: "-- Выберите тип --",
            other: "Другое",
            quantityLabel: "Количество *",
            createBtn: "Создать оборудование",
            cancelBtn: "Отмена",
            alertCreated: "Оборудование успешно создано!"
        },

        roles: {
            teacher: "Преподаватель",
            admin: "Админ"
        },
        
        user: {
            manageUsers: "Управление пользователями",
            addUser: "Добавить пользователя",
            fullName: "ФИО",
            email: "Email",
            role: "Роль",
            actions: "Действия",
            edit: "Редактировать",
            reset: "Сбросить",
            delete: "Удалить",
            back: "Назад в панель администратора",
            editUserTitle: "Редактировать пользователя",
            createUserTitle: "Создать новый Пользователь",
            firstName: "Имя",
            lastName: "Фамилия",
            saveChanges: "Сохранить изменения",
            alertUpdated: "Пользователь обновлён!",
            password: "Пароль",
            alertUpdated: "Пользователь создан!"
        },

        booking: {
            createBookingTitle: "Создать новое бронирование",
            bookingType: "Тип бронирования",
            classroom: "Аудитория",
            equipment: "Оборудование",
            date: "Дата",
            startTime: "Время начала",
            endTime: "Время окончания",
            departments: "Факультеты",
            students: "Студенты",
            searchClassrooms: "Поиск доступных аудиторий",
            building: "Здание",
            allBuildings: "Все здания",
            mainBuilding: "Главное здание",
            building5: "Здание №5",
            minCapacity: "Мин. вместимость",
            requiredEquipment: "Необходимое оборудование",
            anyEquipment: "Любое оборудование",
            minQuantity: "Мин. количество",
            searchBtn: "Поиск аудиторий",
            availableClassrooms: "Доступные аудитории",
            selectEquipment: "Выберите оборудование",
            quantity: "Количество",
            optional: "Необязательно",
            notes: "Примечания",
            createBookingBtn: "Создать бронирование",
            cancelBtn: "Отмена",
            myBookings: {
                pageTitle: "Мои бронирования",
                brandText: "METACLASS",
                dashboard: "Панель",
                newBooking: "Новое бронирование",
                admin: "Админ",
                adminPanel: "Панель администратора",
                manageUsers: "Управление пользователями",
                classrooms: "Аудитории",
                schedules: "Расписания",
                equipment: "Оборудование",
                account: "Аккаунт",
                darkLightMode: "Темная/Светлая тема",
                changePassword: "Сменить пароль",
                logout: "Выйти",
                bookingCreated: "Бронирование успешно создано.",
                filterAll: "Все",
                filterPending: "В ожидании",
                filterConfirmed: "Подтверждено",
                filterRejected: "Отклонено",
                classroomBooking: "Бронирование аудитории",
                equipmentBooking: "Бронирование оборудования",
                statusPending: "В ожидании",
                statusConfirmed: "Подтверждено",
                location: "Место:",
                capacity: "Вместимость: ",
                equipment: "Оборудование:",
                students: "студентов",
                details: "Детали",
                approve: "Одобрить",
                reject: "Отклонить",
                cancel: "Отменить",
                created: "Создано: 17 Ноября, 2025",
                forClassroom: "Для аудитории:",
                university: "Система бронирования MetaClass University",
                poweredBy: "Работает на технологии MetaClass"
            }
        },

        account: {
            themeToggle: "Темная/Светлая тема",
            changePassword: "Изменить пароль",
            logout: "Выйти",
            login: "Вход"
        },
        login: {
            pageTitle: "Вход - MetaClass",
            welcomeBack: "С возвращением",
            signInAccess: "Войдите, чтобы получить доступ к аккаунту",
            emailAddress: "Электронная почта",
            password: "Пароль",
            rememberMe: "Запомнить меня на этом устройстве",
            signIn: "Войти",
            forgotPassword: "Забыли пароль?"
        },
        forgotPassword: {
            pageTitle: "Восстановление пароля",
            title: "Сброс пароля",
            subtitle: "Введите ваш email, и мы отправим вам код подтверждения.",
            sendCode: "Отправить код подтверждения",
            backToLogin: "Вернуться на страницу входа"
        },
        verifyCode: {
            pageTitle: "Подтверждение кода",
            title: "Подтвердите ваш email",
            subtitle: "Мы отправили 6-значный код подтверждения на вашу почту.",
            verifyBtn: "Подтвердить",
            backToStart: "Вернуться к началу"
        },
        newPassword: {
            pageTitle: "Новый пароль",
            title: "Создать новый пароль",
            subtitle: "Ваш новый пароль должен отличаться от предыдущего.",
            saveBtn: "Сохранить новый пароль"
        },
        changePassword: {
            title: "Смена пароля - MetaClass",
            titleOnly: "Смена пароля",
            firstLoginTitle: "Первый вход:",
            firstLoginText: "Вы должны сменить пароль перед продолжением.",            
            currentPassword: "Текущий пароль",
            newPassword: "Новый пароль",
            confirmPassword: "Подтвердите пароль",
            passwordRule: "Пароль должен содержать минимум 6 символов, заглавные, строчные буквы и цифры.",            
            btnChange: "Сменить пароль",
            cancel: "Отмена",            
            required: "Обязательно",
            tooShort: "Слишком короткий",
            noMatch: "Пароли не совпадают",
            currentRequired: "Текущий пароль обязателен.",
            success: "Пароль успешно изменён!"
        },
        
        bookings: {
            recent: "Недавние бронирования",
            viewAll: "Посмотреть все"
        },
        booking_details:
        {
            bookingDetails: "Детали бронирования",
            pending: "В ожидании",
            teacherInfo: "Информация о преподавателе",
            name: "Имя",
            email: "Эл. почта",
            bookingInfo: "Информация о бронировании",
            type: "Тип",
            classroom: "Класс",
            date: "Дата",
            time: "Время",
            status: "Статус",
            created: "Создано",
            lastUpdated: "Последнее обновление",
            building: "Здание",
            roomNumber: "Номер комнаты",
            capacity: "Вместимость",
            availableEquipment: "Доступное оборудование",
            additionalNotes: "Дополнительные заметки",
            departmentInfo: "Информация о департаменте",
            studentList: "Список студентов",
            approve: "Одобрить",
            reject: "Отклонить",
            delete: "Удалить",
            backToList: "Назад к списку",
            reasonForRejection: "Причина отклонения",
            rejectBooking: "Отклонить бронирование",
            cancel: "Отмена",
            emailNotificationsPending: "Уведомления по электронной почте ожидаются"
        },
        booking_equipment:
        {
            equipmentBookingDetails: "Детали бронирования оборудования",
            confirmed: "Подтверждено",
            teacherInfo: "Информация о преподавателе",
            name: "Имя",
            email: "Эл. почта",
            bookingInfo: "Информация о бронировании",
            type: "Тип",
            equipment: "Оборудование",
            date: "Дата",
            time: "Время",
            status: "Статус",
            created: "Создано",
            lastUpdated: "Последнее обновление",
            equipmentInfo: "Информация об оборудовании",
            equipmentName: "Название оборудования",
            quantityRequested: "Запрошенное количество",
            totalAvailable: "Всего доступно",
            forClassroom: "Для класса",
            additionalNotes: "Дополнительные заметки",
            backToList: "Назад к списку",
            emailNotificationsPending: "Уведомления по электронной почте ожидаются"
        },
        modal: {
            common: {
                cancel: "Отмена",
                close: "Закрыть"
            },
            reject: {
                title: "Отклонить бронирование",
                reason: "Причина отклонения",
                btn: "Отклонить"
            },
            cancel: {
                title: "Отменить бронирование",
                reason: "Причина",
                btn: "Отменить бронирование"
            }
        },
        notifications: {
            title: "Уведомления",
            none: "Нет уведомлений",
            markAllRead: "Отметить все как прочитанные"
        },
        footer: {
            copyright: "© 2025 - Система бронирования MetaClass",
            poweredBy: "Разработано MetaClass Technology"
        }
    },

    hy: {
        hero: {
            title: "MetaClass - Համալսարանի ռեսուրսների ամրագրման համակարգ",
            welcomeUser: "Բարի գալուստ",
            welcomeTitle: "Համալսարանի ռեսուրսների ամրագրման համակարգ",
            dashboardType: "Դասասենյակների և սարքավորումների ամրագրումների արդյունավետ կառավարում",
            getStarted: "Սկսել",
            easyBooking: "Հեշտ ամրագրում",
            easyBookingDesc: "Ամրագրեք դասասենյակները և սարքավորումները մի քանի կոճակով",
            secureAccess: "Ապահով մուտք",
            secureAccessDesc: "Դերը հիմնված մուտքը ապահովում է տվյալների անվտանգությունը",
            realTimeNotifications: "Պատասխանների ծանուցումներ",
            realTimeNotificationsDesc: "Ստացեք տեղեկություններ ձեր ամրագրումների մասին"
        },
        dashboard: {
            totalBookings: "Ընդհանուր ամրագրումներ",
            pending: "Սպասում է հաստատման",
            users: "Օգտվողներ",
            classrooms: "Դասասենյակներ",
            room: "Սենյակ",
            teacher: "Դասախոս",
            date: "Ամսաթիվ",
            time: "Ժամ",
            quantity: "Քանակ",
            approve: "Հաստատել",
            reject: "Մերժել",
            cancel: "Չեղարկել",
            noBookings: "Ամրագրումներ չեն գտնվել։",
            alertApproved: "Ամրագրումը հաստատվեց!",
            alertRejected: "Ամրագրումը մերժվեց!",

            status: {
                confirmed: "Հաստատված",
                pending: "Սպասող",
                rejected: "Մերժված",
                cancelled: "Չեղարկված"
            },

            myBookingsStat: "Իմ ամրագրումները",
            pendingStat: "Սպասող",
            confirmedStat: "Հաստատված",

            teacherCreate: {
                title: "Ցանկանու՞մ եք գրանցել ռեսուրս։",
                subtitle: "Ստեղծեք նոր ամրագրում լսարանների կամ սարքավորման համար",
                button: "Ստեղծել Ամրագրում"
            },

            department: "Ֆակուլտետ",
            code: "Կոդ",
            classroom: "Դասասենյակ",
            day: "Օր",
            time: "Ժամ",
            instructor: "Դասախոս",
            semester: "Սեմեստր",
            note: "Նշում՝",
            noteText: "Այս դասացուցակներում օգտագործվող լսարանները ամրագրման համար հասանելի չեն նշված ժամանակներում։"

        },
        page: {
            dashboardTitle: "Վահանակ - MetaClass"
        },
        departments: {
            cs: "Համակարգչային տեխնոլոգիաներ",
            physics: "Ֆիզիկա"
        },
        days: {
            monday: "Երկուշաբթի",
            wednesday: "Չորեքշաբթի"
        },
        rooms: {
            room201: "Սենյակ 201 - Ճարտարագիտական մասնաշենք",
            room102: "Սենյակ 102 - Գիտական մասնաշենք"
        },
        nav: {
            dashboard: "Վահանակ",
            newBooking: "Նոր Ամրագրում",
            myBookings: "Իմ Ամրագրումները",
            admin: "Ադմին",
            account: "Հաշիվ"
        },
        admin: {
            panel: "Ադմին Վահանակ",
            manageUsers: "Օգտատերերի կառավարում",
            manageBookings: "Կառավարել ամրագրումները",
            classrooms: "Լսարաններ",
            equipment: "Սարքավորումներ",
            schedules: "Ժամանակացույցեր",
            manageUsersDesc: "Ավելացնել, խմբագրել կամ ջնջել օգտատերերին և վերականգնել գաղտնաբառերը",
            manageBookingsDesc: "Հաստատել, մերժել կամ ջնջել ամրագրումները",
            classroomsDesc: "Դիտել և կառավարել լսարանների ֆոնդը",
            equipmentDesc: "Կառավարել սարքավորումների ֆոնդը և հասանելիությունը",
            schedulesDesc: "Դիտել և կառավարել դասացուցակները",
            dashboardDesc: "Դիտել համակարգի վիճակագրությունը և վերջին գործողությունները"
        },
        classrooms: {
            title: "Դասասենյակներ",
            addClassroom: "Ավելացնել նոր դասասենյակ",
            room: "Սենյակ",
            building: "Շինություն",
            capacity: "Տեղակալություն",
            features: "Հատկություններ",
            active: "Ակտիվ",
            inactive: "Ոչ ակտիվ",
            backToAdmin: "Վերադառնալ կառավարման վահանակ",
            
            feature_projector: "Պրոյեկտոր",
            feature_ac: "Օդորակիչ",
            feature_whiteboard: "Գրատախտակ",
            feature_smarttv: "Խելացի հեռուստացույց",
            feature_sound: "Ձայնային համակարգ",
            create: "Ստեղծել նոր դասասենյակ",
            name: "Դասասենյակի անուն",
            capacity: "Տեղակալություն",
            location: "Վայրում",
            equipment: "Սարքավորումներ",
            count: "Քանակ",
            remove: "Ջնջել",
            createBtn: "Ստեղծել դասասենյակ",
            cancel: "Չեղարկել",
            alertMissingEquipment: "Խնդրում ենք մուտքագրել սարքի անունը և քանակը։",
            alertCreated: "Դասասենյակը հաջողությամբ ստեղծվեց։",
            alertError: "Դասասենյակի ստեղծման ընթացքում սխալ տեղի ունեցավ։"
        },

        equipment: {
            title: "Սարքավորումների ֆոնդ",
            addEquipmentBtn: "Ավելացնել նոր սարքավորում",
            name: "Անուն",
            category: "Կատեգորիա",
            totalQuantity: "Ընդհանուր քանակ",
            available: "Հասանելի",
            description: "Նկարագրություն",
            status: "Կարգավիճակ",
            active: "Ակտիվ",
            inactive: "Ոչ ակտիվ",
            backToAdmin: "Վերադառնալ կառավարման վահանակ",
            
            projector: "Պրոյեկտոր",
            pc: "Համակարգիչ",
            labMicroscope: "Լաբորատոր լսարանի մանրադիտակ",
            
            avEquipment: "Աուդիո-տեսա սարքավորումներ",
            computer: "Համակարգիչ",
            biology: "Կենսաբանություն",
            
            fullHDProjector: "Լրիվ HD պրոյեկտոր",
            microComputer: "Միկրոկոմպյուտեր",
            microscopeDetails: "Մեծացում 40x-1000x",
            createTitle: "Ստեղծել նոր սարքավորում",
            nameLabel: "Սարքի անուն *",
            typeLabel: "Սարքի տեսակը *",
            typeSelect: "-- Ընտրեք տեսակը --",
            other: "Այլ",
            quantityLabel: "Քանակ *",
            createBtn: "Ստեղծել սարքավորում",
            cancelBtn: "Չեղարկել",
            alertCreated: "Սարքավորումը հաջողությամբ ստեղծվեց։"
        },

        roles: {
            teacher: "Դասախոս",
            admin: "Ադմին"
        },

        user: {
            manageUsers: "Օգտատերերի կառավարում",
            addUser: "Ավելացնել նոր օգտատեր",
            fullName: "Անուն ազգանուն",
            email: "Էլ․ փոստ",
            role: "Դեր",
            actions: "Գործողություններ",
            edit: "Խմբագրել",
            reset: "Վերականգնել",
            delete: "Ջնջել",
            back: "Վերադառնալ կառավարման վահանակ",
            editUserTitle: "Օգտատիրոջ խմբագրում",
            createUserTitle: "Ստեղծել նոր օգտատեր",
            firstName: "Անուն",
            lastName: "Ազգանուն",
            saveChanges: "Պահել փոփոխությունները",
            alertUpdated: "Օգտատերը հաջողությամբ թարմացվեց!",
            password: "Գաղտնաբառ",
            alertUpdated: "Օգտատերը հաջողությամբ ստեղծվեց։"
        },

        booking: {
            createBookingTitle: "Ստեղծել նոր ամրագրում",
            bookingType: "Ամրագրման տեսակ",
            classroom: "Դասասենյակ",
            equipment: "Սարքավորում",
            date: "Ամսաթիվ",
            startTime: "Սկիզբ",
            endTime: "Ավարտ",
            departments: "Ֆակուլտետներ",
            students: "Ուսանողներ",
            searchClassrooms: "Փնտրել հասանելի դասասենյակներ",
            building: "Շինություն",
            allBuildings: "Բոլոր շենքերը",
            mainBuilding: "Գլխավոր մասնաշենք",
            building5: "Մասնաշենք №5",
            minCapacity: "Նվազագույն տեղակայում",
            requiredEquipment: "Պահանջվող սարքավորում",
            anyEquipment: "Ցանկացած սարքավորում",
            minQuantity: "Նվազագույն քանակ",
            searchBtn: "Փնտրել դասասենյակները",
            availableClassrooms: "Հասանելի դասասենյակներ",
            selectEquipment: "Ընտրել սարքավորում",
            quantity: "Քանակ",
            optional: "Ընտրովի",
            buildingOptional: "Մասնաշենք (ոչ պարտադիր)",
            classroomOptional: "Լսարան (ոչ պարտադիր)",
            notes: "Նշումներ",
            createBookingBtn: "Ստեղծել ամրագրում",
            cancelBtn: "Չեղարկել",
            equipmentSelect: "Ընտրել սարքավորում",
            myBookings: {
                pageTitle: "Իմ ամրագրումները",
                brandText: "METACLASS",
                dashboard: "Վահանակ",
                newBooking: "Նոր ամրագրում",
                admin: "Ադմին",
                adminPanel: "Ադմին վահանակ",
                manageUsers: "Օգտագործողների կառավարում",
                classrooms: "Դասասենյակներ",
                schedules: "Ժամանակացույցեր",
                equipment: "Սարքավորումներ",
                account: "Հաշիվ",
                darkLightMode: "Մուգ/Լուսավոր ռեժիմ",
                changePassword: "Փոխել գաղտնաբառը",
                logout: "Ելք",
                bookingCreated: "Ամրագրումը հաջողությամբ ստեղծվել է։",
                filterAll: "Բոլորը",
                filterPending: "Սպասման մեջ",
                filterConfirmed: "Հաստատված",
                filterRejected: "Մերժված",
                classroomBooking: "Լսարանի ամրագրում",
                equipmentBooking: "Սարքավորման ամրագրում",
                statusPending: "Սպասման մեջ",
                statusConfirmed: "Հաստատված",
                location: "Հասցե",
                capacity: "Տարողություն։ ",
                equipment: "Սարքավորում:",
                students: "ուսանողներ",
                details: "Մանրամասներ",
                approve: "Հաստատել",
                reject: "Մերժել",
                cancel: "Չեղարկել",
                created: "Ստեղծվել է: Նոյ 17, 2025",
                forClassroom: "Դասասենյակի համար:",
                university: "MetaClass Համալսարանի Ամրագրման Համակարգ",
                poweredBy: "Նախագծված է MetaClass տեխնոլոգիայով"
            }
        },

        account: {
            themeToggle: "Մուգ/Լուսավոր ռեժիմ",
            changePassword: "Փոխել գաղտնաբառը",
            logout: "Դուրս գալ",
            login: "Մուտք"
        },
        login: {
            pageTitle: "Մուտք - MetaClass",
            welcomeBack: "Բարի գալուստ",
            signInAccess: "Մուտք գործեք՝ ձեր հաշիվը հասանելի դարձնելու համար",
            emailAddress: "Էլ․ փոստ",
            password: "Գաղտնաբառ",
            rememberMe: "Հիշել այս սարքում",
            signIn: "Մուտք գործել",
            forgotPassword: "Մոռացել եք գաղտնաբառը?"
        },
        forgotPassword: {
            pageTitle: "Գաղտնաբառի վերականգնում",
            title: "Վերականգնել գաղտնաբառը",
            subtitle: "Մուտքագրեք ձեր էլ․ փոստը, և մենք կուղարկենք հաստատման կոդը։",
            sendCode: "Ուղարկել հաստատման կոդը",
            backToLogin: "Վերադառնալ մուտքի էջ"
        },
        verifyCode: {
            pageTitle: "Հաստատման կոդ",
            title: "Հաստատեք ձեր էլ․ փոստը",
            subtitle: "Մենք ուղարկել ենք 6-հատորոշիչ հաստատման կոդ ձեր էլ․ փոստին։",
            verifyBtn: "Հաստատել",
            backToStart: "Վերադառնալ սկզբին"
        },
        newPassword: {
            pageTitle: "Նոր Գաղտնաբառ",
            title: "Ստեղծել նոր գաղտնաբառ",
            subtitle: "Ձեր նոր գաղտնաբառը պետք է տարբերվի նախորդից։",
            saveBtn: "Պահել նոր գաղտնաբառը"
        },
        changePassword: {
            title: "Գաղտնաբառի փոփոխում - MetaClass",
            titleOnly: "Գաղտնաբառի փոփոխում",
            firstLoginTitle: "Առաջին մուտք․",
            firstLoginText: "Ձեզ անհրաժեշտ է փոխել գաղտնաբառը շարունակելու համար։",            
            currentPassword: "Ներկա գաղտնաբառ",
            newPassword: "Նոր գաղտնաբառ",
            confirmPassword: "Հաստատել գաղտնաբառը",
            passwordRule: "Գաղտնաբառը պետք է լինի առնվազն 6 նշան և պարունակի մեծատառ, փոքրատառ և թվեր։",            
            btnChange: "Փոխել գաղտնաբառը",
            cancel: "Չեղարկել",            
            required: "Պարտադիր է",
            tooShort: "Չափազանց կարճ է",
            noMatch: "Չի համապատասխանում",
            currentRequired: "Ներկա գաղտնաբառը պարտադիր է։",
            success: "Գաղտնաբառը հաջողությամբ փոխվեց!"
        },
        
        bookings: {
            recent: "Վերջին Ամրագրումները",
            viewAll: "Դիտել բոլորը"
        },
        booking_details:
        {
            bookingDetails: "Ամրագրումների մանրամասներ",
            pending: "Սպասման մեջ",
            teacherInfo: "Ուսուցչի տեղեկություններ",
            name: "Անուն",
            email: "Էլ. հասցե",
            bookingInfo: "Ամրագրման տեղեկություններ",
            type: "Տեսակ",
            classroom: "Լսարան",
            date: "Ամսաթիվ",
            time: "Ժամանակ",
            status: "Կարգավիճակ",
            created: "Ստեղծվել է",
            lastUpdated: "Վերջին թարմացում",
            building: "Մասնաշենք",
            roomNumber: "Սենյակի համար",
            capacity: "Համարողություն",
            availableEquipment: "Ստացվող սարքավորումներ",
            additionalNotes: "Լրացուցիչ նշումներ",
            departmentInfo: "Դեպարտամենտի տեղեկություններ",
            studentList: "Ուսանողների ցուցակ",
            approve: "Ընդունել",
            reject: "Մերժել",
            delete: "Ջնջել",
            backToList: "Հետ դառնալ ցուցակ",
            reasonForRejection: "Մերժման պատճառ",
            rejectBooking: "Մերժել ամրագրումը",
            cancel: "Բաց թողնել",
            emailNotificationsPending: "Էլ. փոստի ծանուցումները սպասման մեջ են"
        },
        booking_equipment:
        {
            equipmentBookingDetails: "Սարքավորումների ամրագրումների մանրամասներ",
            confirmed: "Հաստատված",
            teacherInfo: "Ուսուցչի տեղեկություններ",
            name: "Անուն",
            email: "Էլ. հասցե",
            bookingInfo: "Ամրագրման տեղեկություններ",
            type: "Տեսակ",
            equipment: "Սարքավորում",
            date: "Ամսաթիվ",
            time: "Ժամանակ",
            status: "Կարգավիճակ",
            created: "Ստեղծվել է",
            lastUpdated: "Վերջին թարմացում",
            equipmentInfo: "Սարքավորման տեղեկություններ",
            equipmentName: "Սարքավորման անունը",
            quantityRequested: "Պահանջվող քանակ",
            totalAvailable: "Ընդհանուր առկա",
            forClassroom: "Լսարանի համար",
            additionalNotes: "Լրացուցիչ նշումներ",
            backToList: "Հետ դառնալ ցուցակ",
            emailNotificationsPending: "Էլ. փոստի ծանուցումները սպասման մեջ են"
        },
        modal: {
            common: {
                cancel: "Չեղարկել",
                close: "Փակել"
            },
            reject: {
                title: "Մերժել Ամրագրումը",
                reason: "Մերժման պատճառ",
                btn: "Մերժել"
            },
            cancel: {
                title: "Չեղարկել Ամրագրումը",
                reason: "Պատճառ",
                btn: "Չեղարկել Ամրագրումը"
            }
        },
        notifications: {
            title: "Ծանուցումներ",
            none: "Ծանուցումներ չկան",
            markAllRead: "Նշել բոլորը որպես կարդացված"
        },
        footer: {
            copyright: "© 2025 - MetaClass Համալսարանի Ամրագրումների Համակարգ",
            poweredBy: "Ստեղծվել է MetaClass Technology-ի կողմից"
        }
    }
};

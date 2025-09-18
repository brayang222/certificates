"use client"
import { useState, useRef } from "react";
import {
    ArrowLeft,
    Upload,
    Trash2,
    User,
    Mail,
    Camera,
} from "lucide-react";
import Link from "next/link";
import { useUser } from "@/app/hooks/useUser";
import Image from "next/image";



const UserDetail = ({id}: {id: string}) => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    // const [uploadedImages, setUploadedImages] = useState<Array<{ id: string, url: string, name: string, uploadDate: string }>>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {user, error, loading} = useUser(id);
    console.log(user)

    //   if (!userData) {
    //     return (
    //       <div className="min-h-screen bg-gradient-bg flex items-center justify-center">
    //         <div className="text-center">
    //           <h2 className="text-2xl font-bold text-foreground mb-2">Usuario no encontrado</h2>
    //           <Link href="/">
    //             <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
    //               Volver al dashboard
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     );
    //   }

    //   const allImages = [...userData.images, ...uploadedImages];
    
  if (loading) return <p>Cargando usuario...</p>
  if (error) return <p>Error: {error}</p>
  if (!user) return <p>No se encontró el usuario</p>


    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        Array.from(files).forEach((file) => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                // reader.onload = (e) => {
                //     // const newImage = {
                //     //     id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
                //     //     url: e.target?.result as string,
                //     //     name: file.name,
                //     //     uploadDate: new Date().toISOString().split('T')[0]
                //     // };
                //     // setUploadedImages(prev => [...prev, newImage]);
                // };
                // reader.readAsDataURL(file);
            }
        });

        // toast({
        //     title: "Imágenes subidas",
        //     description: `Se han subido ${files.length} imagen(es) correctamente.`,
        // });

        // Reset input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleDeleteSelected = () => {
        // setUploadedImages(prev => prev.filter(img => !selectedImages.includes(img.id)));
        setSelectedImages([]);
        // toast({
        //     title: "Imágenes eliminadas",
        //     description: "Las imágenes seleccionadas han sido eliminadas.",
        // });
    };

    // const toggleImageSelection = (imageId: string) => {
    //     setSelectedImages(prev =>
    //         prev.includes(imageId)
    //             ? prev.filter(id => id !== imageId)
    //             : [...prev, imageId]
    //     );
    // };

    return (
        <div className="min-h-screen bg-gradient-bg">
            {/* Header */}
            <header className="bg-card shadow-card border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/admin">
                                <button className="flex items-center px-3 py-2 text-sm font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Volver
                                </button>
                            </Link>
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    {user?.avatar_url ? (
                                        <Image
                                            src={user.avatar_url}
                                            alt={user.full_name ?? user.email!}
                                            className="h-12 w-12 rounded-full ring-2 ring-primary/20 object-cover"
                                        />
                                    ) : (
                                        <div className="h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center ring-2 ring-primary/20">
                                            <User className="h-6 w-6" />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-foreground">{user?.full_name ?? user?.email}</h1>
                                    <p className="text-muted-foreground">{user?.role}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${user?.status === "activo"
                                        ? "bg-dashboard-success text-white"
                                        : "bg-secondary text-secondary-foreground"
                                    }`}>
                                    {user?.status}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* User Info */}
                    <div className="lg:col-span-1">
                        <div className="p-6 bg-gradient-card shadow-card rounded-lg border border-border">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Información del Usuario</h2>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-foreground">{user?.email}</span>
                                </div>
                                <div className="pt-4 border-t border-border">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-muted-foreground">Fecha registro</p>
                                            <p className="font-medium text-foreground">{user?.created_at}</p>
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground">Última actividad</p>
                                            <p className="font-medium text-foreground">{user?.created_at}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="lg:col-span-2">
                        <div className="p-6 bg-gradient-card shadow-card rounded-lg border border-border">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <Camera className="h-5 w-5 text-primary" />
                                    <h2 className="text-lg font-semibold text-foreground">Galería de Imágenes</h2>
                                </div>
                                <div className="flex space-x-2">
                                    {selectedImages.length > 0 && (
                                        <button
                                            onClick={handleDeleteSelected}
                                            className="flex items-center px-3 py-2 text-sm font-medium rounded-md border border-input bg-background text-destructive hover:bg-accent hover:text-destructive transition-colors"
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Eliminar ({selectedImages.length})
                                        </button>
                                    )}
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="flex items-center px-3 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md shadow-button hover:bg-primary/90 transition-colors"
                                    >
                                        <Upload className="h-4 w-4 mr-2" />
                                        Subir imágenes
                                    </button>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                </div>
                            </div>

                            {/* {allImages.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="p-4 bg-muted/50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <Camera className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-lg font-medium text-foreground mb-2">No hay imágenes</h3>
                                    <p className="text-muted-foreground mb-4">Sube algunas imágenes para comenzar</p>
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                                    >
                                        <Upload className="h-4 w-4 mr-2" />
                                        Subir primera imagen
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {allImages.map((image) => (
                                        <div
                                            key={image.id}
                                            className="relative group cursor-pointer"
                                            onClick={() => toggleImageSelection(image.id)}
                                        >
                                            <div className={`relative overflow-hidden rounded-lg border-2 transition-all ${selectedImages.includes(image.id)
                                                    ? 'border-primary ring-2 ring-primary/20'
                                                    : 'border-transparent hover:border-muted'
                                                }`}>
                                                <img
                                                    src={image.url}
                                                    alt={image.name}
                                                    className="w-full h-32 object-cover transition-transform group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <div className="text-white text-xs text-center">
                                                        <p className="font-medium truncate">{image.name}</p>
                                                        <p className="text-xs opacity-75">{image.uploadDate}</p>
                                                    </div>
                                                </div>
                                                {selectedImages.includes(image.id) && (
                                                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                                                        <X className="h-3 w-3" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;